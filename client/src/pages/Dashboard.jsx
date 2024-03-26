import { useContext, useRef,useEffect } from "react";
import Breadcrumbs from '../components/Breadcrumbs'
import {Student} from '../assets/img/index';
import { Context } from '../context/Context';
function Dashboard() {

    const breadcrumbs = [
        { label: 'Home', link: '/'},
        ];

    const { user } = useContext(Context);
    const userObject = JSON.parse(user);  



    return (

    <div className="container-fluid">

        <Breadcrumbs breadcrumbs={breadcrumbs} />

        <h1 className="font-weight-bold">WELLCOME {userObject.username}!</h1>

        

        <div className="row">

            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    TOTAL FEEDBACK COUNT</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">100</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-calendar fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    TOTAL POSITIVE FEEDBACK COUNT</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">50</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-comments fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                TOTAL NEGATIVE FEEDBACK COUNT</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">25</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-comments fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                TOTAL NEUTRAL FEEDBACK COUNT</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">25</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-comments fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className="row">
            <div className='col-6'>
                <img 
                    src={Student} 
                    className="rounded float-left" 
                    alt="..." 
                    style={{
                    width: '100%', 
                    height: 'auto', 
                    objectFit: 'contain'
                    }}
                />
            </div>
            <div className='col-6'>
            <p class="font-weight-bold">Discover the collective pulse of Sri Lanka's university students. 
            Your shared sentences weave into the larger narrative of our country's higher education saga, 
            illuminating the experiences that shape our academic culture.
            </p>
            <p>Lend your voice to the chorus of Sri Lanka's university students and enrich the national educational dialogue.</p>

            </div>
         
        </div>

        

    </div>
    
  )
}

export default Dashboard