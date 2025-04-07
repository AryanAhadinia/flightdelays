import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';

interface FlightArc {
    startLat: number;
    startLng: number;
    endLat: number;
    endLng: number;
    flight: string;
}

interface Airport {
    lat: number;
    lng: number;
    name: string;
}

const FlightGlobe: React.FC = () => {
    const globeEl = useRef<any>(null);
    const [arcsData, setArcsData] = useState<FlightArc[]>([]);

    // Define airport markers data.
    const airportsData: Airport[] = [
        { lat: 40.6413, lng: -73.7781, name: "JFK" },
        { lat: 51.4700, lng: -0.4543, name: "LHR" },
        { lat: 33.9416, lng: -118.4085, name: "LAX" },
        { lat: 35.5494, lng: 139.7798, name: "HND" },
        { lat: 37.6213, lng: -122.3790, name: "SFO" },
        { lat: 48.3538, lng: 11.7861, name: "MUC" },
        { lat: 25.2532, lng: 55.3657, name: "DXB" },
        { lat: 49.0097, lng: 2.5479, name: "CDG" },
        { lat: 40.0801, lng: 116.5846, name: "PEK" },
        { lat: -33.9399, lng: 151.1753, name: "SYD" },
        { lat: -23.4356, lng: -46.4731, name: "GRU" },
        { lat: 1.3644, lng: 103.9915, name: "SIN" },
        { lat: 50.0379, lng: 8.5622, name: "FRA" },
        { lat: 19.0896, lng: 72.8656, name: "BOM" },
        { lat: 52.3086, lng: 4.7639, name: "AMS" },
        { lat: -36.8485, lng: 174.7633, name: "AKL" },
        { lat: -33.9249, lng: 18.4241, name: "CPT" },
        { lat: -26.1392, lng: 28.2460, name: "JNB" },
        { lat: -31.9505, lng: 115.8605, name: "PER" },
        { lat: -33.4489, lng: -70.6693, name: "SCL" },
    ];

    useEffect(() => {
        const sampleArcs: FlightArc[] = [
            { startLat: 40.6413, startLng: -73.7781, endLat: 51.4700, endLng: -0.4543, flight: "JFK → LHR" },
            { startLat: 33.9416, startLng: -118.4085, endLat: 35.5494, endLng: 139.7798, flight: "LAX → HND" },
            { startLat: 37.6213, startLng: -122.3790, endLat: 48.3538, endLng: 11.7861, flight: "SFO → MUC" },
            { startLat: 25.2532, startLng: 55.3657, endLat: 51.4700, endLng: -0.4543, flight: "DXB → LHR" },
            { startLat: 49.0097, startLng: 2.5479, endLat: 40.6413, endLng: -73.7781, flight: "CDG → JFK" },
            { startLat: 40.0801, startLng: 116.5846, endLat: -33.9399, endLng: 151.1753, flight: "PEK → SYD" },
            { startLat: -23.4356, startLng: -46.4731, endLat: 33.9416, endLng: -118.4085, flight: "GRU → LAX" },
            { startLat: 1.3644, startLng: 103.9915, endLat: 25.2532, endLng: 55.3657, flight: "SIN → DXB" },
            { startLat: 50.0379, startLng: 8.5622, endLat: 19.0896, endLng: 72.8656, flight: "FRA → BOM" },
            { startLat: 52.3086, startLng: 4.7639, endLat: 40.6413, endLng: -73.7781, flight: "AMS → JFK" },
            { startLat: 51.4700, startLng: -0.4543, endLat: 25.2532, endLng: 55.3657, flight: "LHR → DXB" },
            { startLat: 19.0896, startLng: 72.8656, endLat: 37.6213, endLng: -122.3790, flight: "BOM → SFO" },
            { startLat: -34.8222, startLng: -58.5358, endLat: -26.1392, endLng: 28.2460, flight: "EZE → JNB" },
            { startLat: -36.8485, startLng: 174.7633, endLat: -33.4489, endLng: -70.6693, flight: "AKL → SCL" },
            { startLat: -33.9249, startLng: 18.4241, endLat: -31.9505, endLng: 115.8605, flight: "CPT → PER" },
            { startLat: -23.4356, startLng: -46.4731, endLat: -36.8485, endLng: 174.7633, flight: "GRU → AKL" },
        ];
        setArcsData(sampleArcs);
    }, []);

    useEffect(() => {
        if (globeEl.current && globeEl.current.controls) {
            const controls = globeEl.current.controls();
            controls.autoRotate = true;
            controls.autoRotateSpeed = 0.25;
        }
    }, []);

    return (
        <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
            <Globe
                ref={globeEl}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                arcsData={arcsData}
                arcColor={() => 'rgba(255, 255, 255, 0.7)'}
                arcDashAnimateTime={6000}
                arcDashLength={0.4}
                arcDashGap={1}
                arcLabel={(d: any) => (d as FlightArc).flight}
                pointsData={airportsData}
                pointLat={(d: any) => (d as Airport).lat}
                pointLng={(d: any) => (d as Airport).lng}
                pointLabel={(d: any) => (d as Airport).name}
                pointColor={() => 'orange'}
                pointAltitude={0.001}
                pointRadius={0.2}
                pointResolution={10}
            />

            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'white',
                    pointerEvents: 'none',
                }}
            >
                <h1 style={{ fontSize: '3rem', margin: 0 }}>Delayed?</h1>
                <p style={{ fontSize: '1.5rem' }}>based on a TRUE story.</p>
            </div>
        </div>
    );
};

export default FlightGlobe;
