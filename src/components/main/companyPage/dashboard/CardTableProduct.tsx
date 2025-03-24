import {FC} from 'react';
import "../../../../@styles/main/components/companyPage/gameDashboard.css"


const CardTableProduct: FC<{}> = ({}) => {
    return (
        <div className="card-dashboard shadow">
            <div className="card-header border-0">
                <div className="row align-items-center">
                    <div className="col">
                        <h3 className="mb-0">Social traffic</h3>
                    </div>
                    <div className="col text-right">
                        <a href="#!" className="btn btn-sm btn-primary">See all</a>
                    </div>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table align-items-center table-flush">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">Referral</th>
                        <th scope="col">Visitors</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">
                            Facebook
                        </th>
                        <td>
                            1,480
                        </td>
                        <td>
                            <div className="d-flex align-items-center">
                                <span className="mr-2">60%</span>
                                <div>
                                    <div className="progress">
                                        <div className="progress-bar bg-gradient-danger" role="progressbar"
                                             aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}
                                             style={{width: '60%'}}></div>
                                    </div>

                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            Facebook
                        </th>
                        <td>
                            5,480
                        </td>
                        <td>
                            <div className="d-flex align-items-center">
                                <span className="mr-2">70%</span>
                                <div>
                                    <div className="progress">
                                        <div className="progress-bar bg-gradient-success" role="progressbar"
                                             aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}
                                             style={{width: "70%"}}></div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            Google
                        </th>
                        <td>
                            4,807
                        </td>
                        <td>
                            <div className="d-flex align-items-center">
                                <span className="mr-2">80%</span>
                                <div>
                                    <div className="progress">
                                        <div className="progress-bar bg-gradient-primary" role="progressbar"
                                             aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}
                                             style={{width: "80%"}}></div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            Instagram
                        </th>
                        <td>
                            3,678
                        </td>
                        <td>
                            <div className="d-flex align-items-center">
                                <span className="mr-2">75%</span>
                                <div>
                                    <div className="progress">
                                        <div className="progress-bar bg-gradient-info" role="progressbar"
                                             aria-valuenow={75}
                                             aria-valuemin={0} aria-valuemax={100} style={{width: "75%"}}></div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            twitter
                        </th>
                        <td>
                            2,645
                        </td>
                        <td>
                            <div className="d-flex align-items-center">
                                <span className="mr-2">30%</span>
                                <div>
                                    <div className="progress">
                                        <div className="progress-bar bg-gradient-warning" role="progressbar"
                                             aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}
                                             style={{width: "30%"}}></div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CardTableProduct;
