import {useState} from 'react';


const InputForm = ({handleSubmit, setFullname, setEmail, setPhonenumber, setProfilePicture, setDob, setGender, setShortBio, fullname, email, phonenumber, dob, gender, shortBio}) => {
    return (
      <div className='border-blue-700 border-2 rounded-md p-6 shadow-lg shadow-blue-800 max-w-screen-md text-center'>
      < h1 className="font-bold text-4xl text-blue-500"> Input Form </h1>
      < form onSubmit={handleSubmit}>
          <p className='font-bold text-2xl text-blue-400'>Basic Info:</p>
          <p className='grid grid-cols-4'>
              <label htmlFor="fullname">
                  Full Name:
              </label>
              <input
                  className='border-2 border-blue-400 rounded-md p-1 m-2 col-span-3'
                  type="text"
                  id="fullname"
                  name="fullname"
                  onChange={(e) => setFullname(e.target.value)}
                  value={fullname}/>
          </p>
          <p className='grid grid-cols-4'>
              <label htmlFor="email">
                  Email:
              </label>
              <input
                  className='border-2 border-blue-400 rounded-md p-1 m-2 col-span-3'
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}/>
          </p>
          <p className='grid grid-cols-4'>
              <label htmlFor="phonenumber">Phone Number:</label>
              <input
                  className='border-2 border-blue-400 rounded-md p-1 m-2 col-span-3'
                  type="tel"
                  id="phonenumber"
                  name="phonenumber"
                  onChange={(e) => setPhonenumber(e.target.value)}
                  value={phonenumber}/>
          </p>
          <p className='grid grid-cols-4'>
              <label htmlFor="profilepicture">
                  Profile Picture:
              </label>
              <input
                  className='border-2 border-blue-400 rounded-md p-1 m-2 col-span-3'
                  type="file"
                  id="profilepicture"
                  name="profilepicture"
                  accept="image/*"
                  onChange={(e) => setProfilePicture(e.target.files[0])}/>
          </p>
          <p className='font-bold text-2xl text-blue-400'>Personal Details:</p>
          <p className='grid grid-cols-4'>
              <label htmlFor="dob">Date of Birth:</label>
              <input
                  className='border-2 border-blue-400 rounded-md p-1 m-2 col-span-3'
                  type="date"
                  id="dob"
                  name="dob"
                  onChange={(e) => setDob(e.target.value)}
                  value={dob}/>
          </p>
          <p className='grid grid-cols-4'>
              <label htmlFor="gender">Gender:
              </label>
              <span className='col-span-3 grid grid-cols-3' id="gender">
                <span className='col-span-1'>
                  Male
                  <input
                      className='m-2'
                      type="radio"
                      name="gender"
                      value="male"
                      onChange={(e) => setGender(e.target.value)}
                      checked={gender === "male"}/>
                </span>
                <span className='col-span-1'>
                  Female
                  <input
                      className='m-2'
                      type="radio"
                      name="gender"
                      value="female"
                      onChange={(e) => setGender(e.target.value)}
                      checked={gender === "female"}/>
                </span>
                <span className='col-span-1'>          
                  Other
                  <input
                      className='m-2'
                      type="radio"
                      name="gender"
                      value="other"
                      onChange={(e) => setGender(e.target.value)}
                      checked={gender === "other"}/>
                </span>
              </span>
          </p>
          <p className='grid grid-cols-4'>
              <label htmlFor="shortbio">Short Bio:
              </label>
              <textarea
                  className='border-2 border-blue-400 rounded-md p-1 m-2 col-span-3 h-40'  
                  id="shortbio"
                  name="shortbio"
                  onChange={(e) => setShortBio(e.target.value)}
                  value={shortBio}></textarea>
          </p>

          <button className='border-2 border-blue-400 bg-blue-300 hover:bg-blue-500 rounded font-bold p-2' type="submit">Submit</button>
      </form>
  </div>
    );
};

const ProfilePage = ({fullname, email, phonenumber, profilePicture, dob, gender, shortBio}) => {
    return (
      <div className='border-blue-700 border-2 rounded-md p-6 shadow-lg shadow-blue-800 max-w-screen-md text-center'>
      <h1 className="font-bold text-4xl text-blue-500 mb-2">Profile Page</h1>
      {
        profilePicture 
          ?<img className='border-solid border-2 border-blue-400 rounded-md h-40 w-40 mx-auto' src={URL.createObjectURL(profilePicture)} alt="Profile" />
          :<p className='border-solid border-2 border-blue-400 h-40 w-40 mx-auto'>No Profile Picture</p>
      }
      <p className='w-full text-left mx-2 font-semibold'>Full Name: <span className='text-blue-300 text-xl font-bold text-right'>{fullname}</span></p>
      <p className='w-full text-left mx-2 font-semibold'>Email: <span className='text-blue-300 text-xl font-bold text-right'>{email}</span></p>
      <p className='w-full text-left mx-2 font-semibold'>Phone Number: <span className='text-blue-300 text-xl font-bold text-right'>{phonenumber}</span></p>
      <p className='w-full text-left mx-2 font-semibold'>Date of Birth: <span className='text-blue-300 text-xl font-bold text-right'>{dob}</span></p>
      <p className='w-full text-left mx-2 font-semibold'>Gender: <span className='text-blue-300 text-xl font-bold text-right'>{gender}</span></p>
      <p className='w-full text-left mx-2 font-semibold'>Short Bio: <span className='text-blue-300 text-xl font-bold text-right'>{shortBio}</span></p>
  </div>
    );
};


function App() {
    const [submitted, setSubmitted] = useState(false);

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [shortBio, setShortBio] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <div className='flex items-center justify-center h-screen'>
            {
                submitted
                    ? 
                    <ProfilePage
                        fullname={fullname}
                        email={email}
                        phonenumber={phonenumber}
                        profilePicture={profilePicture}
                        dob={dob}
                        gender={gender}
                        shortBio={shortBio}
                    />
                    : 
                    <InputForm
                        handleSubmit={handleSubmit}
                        setFullname={setFullname}
                        setEmail={setEmail}
                        setPhonenumber={setPhonenumber}
                        setProfilePicture={setProfilePicture}
                        setDob={setDob}
                        setGender={setGender}
                        setShortBio={setShortBio}
                        fullname={fullname}
                        email={email}
                        phonenumber={phonenumber}
                        dob={dob}
                        gender={gender}
                        shortBio={shortBio}
                      />
            }
        </div>
    );
}

export default App;
