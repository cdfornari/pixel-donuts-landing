import { useLayoutEffect, useRef, useContext, useState } from 'react';
import { useTheme } from '@nextui-org/react';
import mapboxgl from "mapbox-gl";
import { CountryContext } from '../../context/country/CountryContext';
import 'mapbox-gl/dist/mapbox-gl.css';

export const Map = () => {
    const {isDark} = useTheme();
    const mapDiv = useRef<HTMLDivElement>(null);
    const [map,setMap] = useState<mapboxgl.Map | null>(null)
    const {country} = useContext(CountryContext)
    useLayoutEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiY2Zvcm5hIiwiYSI6ImNrc3dyMnV0eDA4aW8zMG1zbGQ2ZmFsbHEifQ.UFptdz67oQISn_7gULC73w';
        const map = new mapboxgl.Map({
            container: mapDiv.current!, 
            style: isDark ? 'mapbox://styles/mapbox/dark-v11' :'mapbox://styles/mapbox/streets-v12',
            center: country === 'vzla' ?  [-66.924913, 10.491711] : [139.76342509580235,35.6823525189559],
            zoom: 10
        });
        if(country === 'vzla') {
            new mapboxgl.Marker().setLngLat([-66.925016, 10.491938]).addTo(map);
            new mapboxgl.Marker().setLngLat([-66.83576616497112,10.439937821518845]).addTo(map);
            new mapboxgl.Marker().setLngLat([-66.848293, 10.502786]).addTo(map);
        } else {
            new mapboxgl.Marker().setLngLat([139.76342509580235,35.6823525189559]).addTo(map);
            new mapboxgl.Marker().setLngLat([139.78789481942616,35.70786024491948]).addTo(map);
            new mapboxgl.Marker().setLngLat([139.74518939554702,35.65887094545146]).addTo(map);
        }
        setMap(map)
    }, [country,isDark])
    return (
        <div 
            ref={mapDiv}
            style={{
                height: '100%',
                width: '100%',
                minHeight: '600px',
            }}
        >
        </div>
    )
}