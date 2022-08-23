import React from 'react';
import logo from '../../../images/trivago-logo.png';
import useSingleBed from '../../../hooks/useSingleBed';
import useDoubleBed from '../../../hooks/useDoubleBed';
import SingleBed from '../SingleBed/SingleBed';
import DoubleBed from '../DoubleBed/DoubleBed';

const Stays = () => {
    const [singleBeds] = useSingleBed();
    const [doubleBeds] = useDoubleBed();
    return (
        <div>
            <div className='d-flex flex-wrap gap-3 m-5 align-items-center justify-content-center'>
                <img width={100} height={50} src={logo} alt="trivago" />
                <div className='border-start border-2 border-secondary border-opacity-25 ps-3'>
                    <h4>Deals from your favorite booking sites</h4>
                    <p>Try searching for a city, a specific hotel, or even a landmark!</p>
                </div>
            </div>
            <div className='mt-5'>
                <h2 className='fs-3'>See what's popular Single Bed are available among {singleBeds.length} with other travelers!!!</h2>
                <div className='container mb-5 align-items-center align-self-center'>
                    <div className='row m-0 g-5 align-items-center'>
                        {
                            singleBeds.map(bed => <SingleBed
                                key={bed.id}
                                bed={bed}
                            ></SingleBed>)
                        }
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <h2 className='fs-3'>See what's popular Double Bed are available among {doubleBeds.length} with other travelers!!!</h2>
                <div className='container mb-5 align-items-center align-self-center'>
                    <div className='row m-0 g-5 align-items-center'>
                        {
                            doubleBeds.map(bed => <DoubleBed
                                key={bed.id}
                                bed={bed}
                            ></DoubleBed>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stays;