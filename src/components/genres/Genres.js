import React from 'react'
import "./style.scss";
import { useSelector } from 'react-redux';

const Genres = ({ data }) => {
    const { genres } = useSelector((state) => state.home);
    return (
        <div className='genres'>
            {
                data?.map((g_id) => {
                    if (!genres[g_id]?.name) return;
                    return (<div className="genre" key={g_id}>
                        {
                            genres[g_id]?.name
                        }
                    </div>)
                })
            }
        </div>
    )
}

export default Genres