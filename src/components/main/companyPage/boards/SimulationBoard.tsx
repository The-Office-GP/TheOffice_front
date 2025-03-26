import {Dispatch, FC, SetStateAction, useState, useEffect, useContext} from 'react';
import StartSimulationButton from "../buttons/StartSimulationButton";
import "../../../../@styles/main/components/companyPage/simulation/SimulationBoard.css"
import {CycleType} from "../../../../@types/companyType";
import {cycleTypeDefault} from "../../../../@data/companyValueDefault";
import {useParams} from "react-router";
import {nameOfProducts} from "../../../../@scripts/main/components/companyPage/ldisplayScript";
import {CompanyContext} from "../../../../contexts/CompanyContext";
import SimulationExitButton from "../../../share/SimulationExitButton";

const SimulationBoard: FC<{ setPage: Dispatch<SetStateAction<number>> }> = ({setPage}) => {
    const contextCompany = useContext(CompanyContext)
    const {id} = useParams()
    const [productionSpeed, setProductionSpeed] = useState<number>(50);
    const [productionPriority, setProductionPriority] = useState<number>(50);
    const [marketingPriority, setMarketingPriority] = useState<number>(50);
    const [productDisplay1, setProductDisplay1] = useState<number>(25);
    const [productDisplay2, setProductDisplay2] = useState<number>(25);
    const [productDisplay3, setProductDisplay3] = useState<number>(25);
    const [productDisplay4, setProductDisplay4] = useState<number>(25);
    const [product1, setProduct1] = useState<number>(50);
    const [product2, setProduct2] = useState<number>(50);
    const [product3, setProduct3] = useState<number>(50);
    const [product4, setProduct4] = useState<number>(50);
    const [cycle, setCycle] = useState<CycleType>(cycleTypeDefault);

    useEffect(() => {
        setMarketingPriority(100 - productionPriority);
    }, [productionPriority]);

    const handleProductSpeed = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductionSpeed(Number(e.target.value));
        setCycle(
            {
                id: 0,
                step: 0,
                productionSpeed: productionSpeed,
                priorityProduction: productionPriority,
                priorityMarketing: marketingPriority,
                countGoodSell: 0,
                countBadSell: 0,
                trend: "None",
                companyId: Number(id),
            }
        )
    }

    // Gestionnaires de changement pour chaque produit
    const handleProduct1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduct1(Number(e.target.value));
        setProductDisplay1(product1*100/(product1+product2+product3+product4))
        setProductDisplay2(product2 * 100 / (product1 + product2 + product3 + product4))
        setProductDisplay3(product3 * 100 / (product1 + product2 + product3 + product4))
        setProductDisplay4(product4 * 100 / (product1 + product2 + product3 + product4))
        setCycle(
            {
                id: 0,
                step: 0,
                productionSpeed: productionSpeed,
                priorityProduction: productionPriority,
                priorityMarketing: marketingPriority,
                countGoodSell: 0,
                countBadSell: 0,
                trend: "None",
                companyId: Number(id),
            }
        )
    };

    const handleProduct2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduct2(Number(e.target.value));
        setProductDisplay1(product1 * 100 / (product1 + product2 + product3 + product4))
        setProductDisplay2(product2 * 100 / (product1 + product2 + product3 + product4))
        setProductDisplay3(product3 * 100 / (product1 + product2 + product3 + product4))
        setProductDisplay4(product4 * 100 / (product1 + product2 + product3 + product4))
        setCycle(
            {
                id: 0,
                step: 0,
                productionSpeed: productionSpeed,
                priorityProduction: productionPriority,
                priorityMarketing: marketingPriority,
                countGoodSell: 0,
                countBadSell: 0,
                trend: "None",
                companyId: Number(id),
            }
        )
    };

    const handleProduct3Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduct3(Number(e.target.value));
        setProductDisplay1(product1 * 100 / (product1 + product2 + product3 + product4))
        setProductDisplay2(product2 * 100 / (product1 + product2 + product3 + product4))
        setProductDisplay3(product3 * 100 / (product1 + product2 + product3 + product4))
        setProductDisplay4(product4 * 100 / (product1 + product2 + product3 + product4))
        setCycle(
            {
                id: 0,
                step: 0,
                productionSpeed: productionSpeed,
                priorityProduction: productionPriority,
                priorityMarketing: marketingPriority,
                countGoodSell: 0,
                countBadSell: 0,
                trend: "None",
                companyId: Number(id),
            }
        )
    };

    const handleProduct4Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduct4(Number(e.target.value));
        setProductDisplay1(product1 * 100 / (product1 + product2 + product3 + product4))
        setProductDisplay2(product2 * 100 / (product1 + product2 + product3 + product4))
        setProductDisplay3(product3 * 100 / (product1 + product2 + product3 + product4))
        setProductDisplay4(product4 * 100 / (product1 + product2 + product3 + product4))
        setCycle(
            {
                id: 0,
                step: 0,
                productionSpeed: productionSpeed,
                priorityProduction: productionPriority,
                priorityMarketing: marketingPriority,
                countGoodSell: 0,
                countBadSell: 0,
                trend: "None",
                companyId: Number(id),
            }
        )
    };


    return (
        <>
            <div className={"simulation-container"}
                 style={{backgroundImage: "url('/assets/simulation-background/Simulation-background.png')"}}>
                <SimulationExitButton setPage={setPage}/>
                <h2>Simulation</h2>
                <div className={"settings"}>
                    <div className={"production-settings-part"}>
                        <div className={"setting-container-production"}>
                            <label>Rythme de production</label>
                            <input
                                type={"range"}
                                className={"range-input-production"}
                                min={50}
                                max={150}
                            />
                        </div>
                    </div>
                    <div className={"production-settings-part"}>
                        <div className={"setting-container-production"}>
                            <label>Prioriser la production</label>
                            <input type={"range"} className={"range-input-production"} min={0} max={100}
                                   onChange={(e) => setProductionPriority(Number(e.target.value))}
                                   value={productionPriority}
                            />
                        </div>
                        <div className={"setting-container-production"}>
                            <label className={"marketing-label "}>Prioriser le marketing </label>
                            <input
                                type={"range"}
                                className={"range-input-production"}
                                min={0}
                                max={100}
                                value={marketingPriority}
                                readOnly
                            />
                        </div>
                    </div>

                    <div className={"products-settings-part"}>
                        <div className={"settings-container-products"}>
                            <div className="circle-data">
                                <h2>{nameOfProducts(contextCompany.company, "Product1")}</h2>
                                <div className="data">
                                    <p>{Math.round(productDisplay1)}%</p>
                                </div>
                            </div>
                            <input
                                type={"range"}
                                className={"range-input-products"}
                                min={0}
                                max={100}
                                value={product1}
                                onChange={handleProduct1Change} // Update the value on change
                            />
                        </div>
                        <div className={"settings-container-products"}>
                            <div className="circle-data">
                                <h2>{nameOfProducts(contextCompany.company, "Product2")}</h2>
                                <div className="data">
                                    <p>{Math.round(productDisplay2)}%</p>
                                </div>
                            </div>
                            <input
                                type={"range"}
                                className={"range-input-products"}
                                min={0}
                                max={100}
                                value={product2}
                                onChange={handleProduct2Change} // Update the value on change
                            />
                        </div>
                        <div className={"settings-container-products"}>
                            <div className="circle-data">
                                <h2>{nameOfProducts(contextCompany.company, "Product3")}</h2>
                                <div className="data">
                                    <p>{Math.round(productDisplay3)}%</p>
                                </div>
                            </div>
                            <input
                                type={"range"}
                                className={"range-input-products"}
                                min={0}
                                max={100}
                                value={product3}
                                onChange={handleProduct3Change} // Update the value on change
                            />
                        </div>
                        <div className={"settings-container-products"}>
                            <div className="circle-data">
                                <h2>{nameOfProducts(contextCompany.company, "Product4")}</h2>
                                <div className="data">
                                    <p>{Math.round(productDisplay4)}%</p>
                                </div>
                            </div>
                            <input
                                type={"range"}
                                className={"range-input-products"}
                                min={0}
                                max={100}
                                value={product4}
                                onChange={handleProduct4Change} // Update the value on change
                            />
                        </div>
                    </div>
                </div>
                <StartSimulationButton setPage={setPage}  productionSpeed={productionSpeed} priorityProduction={productionPriority} priorityMarketing={marketingPriority} product1={product1} product2={product2} product3={product3} product4={product4}/>
            </div>
        </>
    );
};

export default SimulationBoard;
