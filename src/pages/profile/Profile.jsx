import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import UploadAvatar from "../../components/profile/UploadAvatar";
import axios from "axios";
const Profile = () => {
    const {  token, userId } = useSelector((state) => state.auth)
    const [imageUrl, setImageUrl] = useState(null);

    const getImage = async () =>{
        try {
           const res =  await axios.get(`http://localhost:3000/users//avatar/${userId}`, {
           responseType: 'arraybuffer',
           headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            })
            const blob = new Blob([res.data], { type: 'image/jpeg' });
            const imageUrl = URL.createObjectURL(blob);
            setImageUrl(imageUrl);
            console.log(imageUrl);

        } catch (error) {

        }

    }
       return (
        <div className="h-screen flex justify-center items-center">
            <div className="px-6 bg-white rounded shadow-md w-96">
                <UploadAvatar/> 
                {/* <button className="text-black btn" onClick={getImage}>Click me</button>
                <div>
      {imageUrl && <img src={imageUrl} alt="User Avatar" />}
    </div> */}
                {/* <div className="flex flex-wrap justify-center">
                    <div className="w-full flex justify-center">
                        <div className="relative">
                            <img src="n" className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
                        </div>
                    </div>
                    <div className="w-full text-center mt-20">
                        <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                            <div className="p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">3,360</span>
                                <span className="text-sm text-slate-400">Photos</span>
                            </div>
                            <div className="p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">2,454</span>
                                <span className="text-sm text-slate-400">Followers</span>
                            </div>

                            <div className="p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">564</span>
                                <span className="text-sm text-slate-400">Following</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-2">
                    <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">Mike Thompson</h3>
                    <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                        <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>Paris, France
                    </div>
                </div>
                <div className="mt-6 py-6 border-t border-slate-200 text-center">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4">
                            <p className="font-light leading-relaxed text-slate-600 mb-4">An artist of considerable range, Mike is the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm.</p>
                            <a href="#" className="font-normal text-slate-700 hover:text-slate-400">Follow Account</a>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>

    );
}

export default Profile



