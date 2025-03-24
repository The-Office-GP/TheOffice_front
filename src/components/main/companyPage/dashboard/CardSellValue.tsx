import {FC} from 'react';
import "../../../../@styles/main/components/companyPage/gameDashboard.css"
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement} from 'chart.js';
import {paletteColors} from "../../../../@styles/paletteColors";
import {CompanyDetailsType} from "../../../../@types/companyType";

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement);


const CardSellValue: FC<{company:CompanyDetailsType}> = ({company}) => {
    const data = {
        labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui', 'Jui', 'Aou', 'Sep', 'Oct', 'Nov','Dec'],
        datasets: [
            {
                label: 'CA',
                data: company.statistics.map((element) => element.totalIncomes),
                borderColor: paletteColors.orange,
                backgroundColor: paletteColors.orange,
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                ticks: {
                    callback: (tickValue: string | number) => {
                        // Si tickValue est un nombre, on peut retourner une chaîne formatée
                        if (typeof tickValue === 'number') {
                            return tickValue % 10 === 0 ? `$${tickValue}k` : ''; // Ajout du format monétaire
                        }
                        return tickValue;
                    },
                },
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: (tooltipItem: any) => {
                        return `$${tooltipItem.raw}k`; // Affichage personnalisé de l'info-bulle
                    },
                },
            },
        },
    };

    return (
        <div className="card-dashboard bg-gradient-default shadow">
            <div className="card-body-sell-dashboard">
                <div className="row">
                    <div className="col">
                        <h3 id="sell-card-title">SALES</h3>
                        <span className="h2 font-weight-bold mb-0" style={{color:"white"}}>500,000</span>
                    </div>
                </div>
                <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success2 mr-2"> 5.24%</span>
                    <span className="text-nowrap">Cette année</span>
                </p>
                <Line data={data} options={options} style={{width: '500px'}}/>
            </div>
        </div>
    );
};

export default CardSellValue;