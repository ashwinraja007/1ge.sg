import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router";
import ContactMapContainer from "../Components/GlobalPresence/ContactMapContainer";
import ContactSidebar from "../Components/GlobalPresence/ContactSidebar";
import { COUNTRIES } from "../Components/GlobalPresence/countriesData";
import useIsMobile from "../hooks/useIsMobile";
import "../assets/global-presence.css";

const GlobalPresencePage = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const isIndiaPage = useMemo(
    () => location.pathname.toLowerCase().includes("india"),
    [location.pathname]
  );

  const countries = useMemo(() => {
    const filtered = COUNTRIES.filter(
      (country) => !(isIndiaPage && country.code === "pk")
    );
    return [...filtered].sort((a, b) => {
      const priorityA = a.priority ?? 1;
      const priorityB = b.priority ?? 1;
      if (priorityA !== priorityB) return priorityA - priorityB;
      return a.name.localeCompare(b.name);
    });
  }, [isIndiaPage]);

  const [expandedCountry, setExpandedCountry] = useState<string | null>(countries[0]?.code ?? null);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string | null>(countries[0]?.code ?? null);
  const [selectedCity, setSelectedCity] = useState<any>(countries[0]?.cities?.[0] ?? null);

  // NEW: when a country (not a city) is focused, store a center+zoom override
  const [overrideView, setOverrideView] = useState<{lat:number; lng:number; zoom:number} | null>(null);

  const [mobileView, setMobileView] = useState<"sidebar" | "map" | "combined">("sidebar");

  useEffect(() => {
    if (countries.length) {
      setExpandedCountry(countries[0].code);
      setSelectedCountryCode(countries[0].code);
      setSelectedCity(countries[0].cities[0]);
      setOverrideView(null); // reset
    }
  }, [countries]);

  useEffect(() => {
    if (!isMobile) setMobileView("combined");
    else if (mobileView === "combined") setMobileView("sidebar");
  }, [isMobile, mobileView]);

  const handleToggleCountry = (code: string) => {
    if (expandedCountry === code) {
      setExpandedCountry(null);
      return;
    }
    setExpandedCountry(code);
    setSelectedCountryCode(code);

    const country = countries.find((c) => c.code === code);
    if (country?.cities?.length) {
      setSelectedCity(country.cities[0]); // choose first city by default
      setOverrideView(null);              // city view takes precedence
    } else {
      setSelectedCity(null);
      // no city? fall back to country center (set via onFocusCountry below)
    }
  };

  const handleSelectCity = (countryCode: string, city: any) => {
    setExpandedCountry(countryCode);
    setSelectedCountryCode(countryCode);
    setSelectedCity(city);
    setOverrideView(null); // clear country override so city lat/lng is used
  };

  // NEW: handle focusing a country from the sidebar using computed center/zoom
  const handleFocusCountry = ({
    center,
    suggestedZoom,
    country,
  }: {
    center: { lat: number; lng: number };
    suggestedZoom: number;
    country: any;
  }) => {
    setSelectedCountryCode(country.code);
    setSelectedCity(null);
    setOverrideView({ lat: center.lat, lng: center.lng, zoom: suggestedZoom });
  };

  const coordinates = useMemo(() => {
    // 1) city selected → use city coords
    if (selectedCity) {
      return { lat: selectedCity.lat, lng: selectedCity.lng, zoom: 13 }; // a bit closer for cities
    }
    // 2) explicit country focus override (center + suggested zoom)
    if (overrideView) return overrideView;

    // 3) fallback to country anchor coords
    const fallbackCountry = countries.find((c) => c.code === selectedCountryCode);
    if (fallbackCountry) return { lat: fallbackCountry.lat, lng: fallbackCountry.lng, zoom: 5 };

    // 4) final fallback (Singapore-ish world view)
    return { lat: 1.3521, lng: 103.8198, zoom: 3 };
  }, [countries, selectedCity, selectedCountryCode, overrideView]);

  return (
    <div className="global-presence-page">
      {isMobile && (
        <div className="global-mobile-toggle">
          <button
            type="button"
            className={mobileView === "sidebar" ? "active" : ""}
            onClick={() => setMobileView("sidebar")}
          >
            Locations
          </button>
          <button
            type="button"
            className={mobileView === "map" ? "active" : ""}
            onClick={() => setMobileView("map")}
          >
            Map
          </button>
        </div>
      )}

      <section className="global-presence-layout">
        <div className={`global-map-section${isMobile && mobileView !== "map" ? " hidden-mobile" : ""}`}>
          <ContactMapContainer coordinates={coordinates} selectedCity={selectedCity} />
        </div>
        <div className={`global-sidebar-section${isMobile && mobileView !== "sidebar" ? " hidden-mobile" : ""}`}>
          <ContactSidebar
            countries={countries}
            expandedCountry={expandedCountry}
            onToggleCountry={handleToggleCountry}
            onSelectCity={handleSelectCity}
            selectedCity={selectedCity}
            selectedCountryCode={selectedCountryCode}
            onFocusCountry={handleFocusCountry}   // <-- pass it down
          />
        </div>
      </section>
    </div>
  );
};

export default GlobalPresencePage;
