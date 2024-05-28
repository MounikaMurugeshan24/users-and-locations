import './Overview.css';
import GeoChart from "../../components/geoChart/GeoChart";


interface OverviewProps {
    totalUsers: number;
}

const Overview: React.FC<OverviewProps> = ({ totalUsers }) => {

    return (
        <>
            <div className="total">Total Users: {totalUsers}</div>
            <div className="page-header">OVERVIEW</div>
            <GeoChart />
        </>
    )
}

export default Overview;