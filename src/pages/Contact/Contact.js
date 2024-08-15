import { Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Mail } from '@mui/icons-material';
import { useState } from 'react';
import { isNotEmpty, validateEmail, numberCheck, messageHasLength } from '../../utils/utils';
import axios from 'axios';
import Header from '../../components/Header/Header';
import ContactPic from '../../assets/images/Contact.png';
import Footer from '../../components/Footer/Footer';
import Contactpic2 from '../../assets/images/contact1.jpg'
import RoutingMachine from '../../components/Routing/RoutingMachine';
import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from 'react-leaflet';
import './Contact.css';
import "leaflet/dist/leaflet.css"
import {Link} from 'react-router-dom';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import EmailIcon from '@mui/icons-material/Email';
import TtyTwoToneIcon from '@mui/icons-material/TtyTwoTone';
const theme = createTheme();


const Contact = () => {
  const [form, setForm] = useState({ fname: '', email: '', telephone: '', city: '', message: '' })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const initialPosition = { lat: 28.6139, lng: 77.2088 };
  // const initialPosition = [ 28.6139, 77.2088 ];
  const [source, setSource] = useState(initialPosition);
  const [destination, setDestination] = useState(0);

  const validate = () => {
    let temp = {}

    temp.fname = isNotEmpty(form.fname) ? '' : 'Name is Required'
    temp.email = validateEmail(form.email) ? '' : 'Incorrect format email'
    temp.telephone = numberCheck(form.telephone) ? '' : 'Mobile not valid'
    temp.city = isNotEmpty(form.city) ? '' : 'City is Required'
    temp.message = messageHasLength(form.message) ? '' : 'Mesage is required or too short'

    setErrors({ ...temp })

    return Object.values(temp).every(value => value === '')
  }

  const handleOnChange = event => {
    const field = event.target.name
    setForm({ ...form, [field]: event.target.value })

    if (field === 'fname' | field === 'city')
      setErrors({ ...errors, [field]: isNotEmpty(event.target.value) ? '' : 'Name is Required' })
    else if (field === 'email')
      setErrors({ ...errors, [field]: validateEmail(event.target.value) ? '' : 'Incorrect format email' })
    else if (field === 'telephone')
      setErrors({ ...errors, [field]: numberCheck(event.target.value) ? '' : 'Mobile not valid' })
    else if (field === 'message')
      setErrors({ ...errors, [field]: messageHasLength(event.target.value) ? '' : 'Mesage is required or too short' })
  }


  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    if (validate()) {
      try {
        const response = await axios.post('/api/contact', form)
        if (response.status === 200) {
          window.alert(`${response.data.message}, check console for the response`)
          setIsLoading(false)
          setForm({ fname: '', email: '', telephone: '', city: '', message: '' })
        }
        console.log(response)
      }
      catch (error) {
        window.alert(`${error}, check console for the error`)
        console.log(error);
        setIsLoading(false)
      }
    }
    else
      setIsLoading(false)
  };


  const MapClickHandler = ({ handleMapClick }) => {
    const map = useMapEvents({
      click: handleMapClick,
    });

    return null;
  };

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    if (!source) {
      setSource({ lat, lng });
    } else if (!destination) {
      setDestination({ lat, lng });
    }
  };

  return (
    <>
      <div className='pt-2 pb-[-2]'>
        <Header />
      </div>

      <div className=' md:mt-[-100px]'>
        <img src={ContactPic} alt="" style={{ width: "100%" }} className='h-[200px] md:h-[650px]'/>
      </div>
      

      <div className="container mx-auto mt-6 flex flex-col md:flex-row md:mt-[-80px]">
    
      <div className="md:h-[300px] md:w-[400px] bg-blue-50 md:ml-[80px] p-[30px] rounded-l-3xl rounded-b-3xl">
            <h3 className="text-xl font-bold">Location Information</h3>
                <h4></h4>
            <h5 className="text-lg font-bold">Connect with us</h5>
                <div className="flex ">
                    <Link to="tel:+123 123 4567" className="bg-blue-600 text-white pr-3 pl-1 py-2 rounded-xl">
                       <span className='mx-2'><WifiCalling3Icon/></span>  Call
                    </Link>
                    <a role="button" className="btn btn-info flex items-center">
                        <i className="fa fa-skype mr-2"></i> Skype
                    </a>
                    <a role="button" href="mailto:nk17112001@gmail.com" className="btn btn-success flex items-center">
                        <i className="fa fa-envelope-o mr-2"></i> Email
                    </a>
                </div>
            </div>
            <div className="md:h-[300px] md:w-[400px] bg-white p-[30px] ">
              </div>
            <div className="md:h-[300px] md:w-[400px] bg-blue-50 md:mr-[80px] p-[30px] rounded-r-3xl rounded-b-3xl">
                <h5 className="text-lg font-bold">Our Address</h5>
                <address className="text-base">
                    Durga Park<br/>
                    New Delhi<br/>
                    INDIA<br/>
                    <i className="fa fa-phone"></i>: <a href="tel:+123 123 4567" className="text-blue-500">+123 123 4567</a><br/>
                    <i className="fa fa-fax"></i>: +123 123 4567<br/>
                    <i className="fa fa-envelope"></i>:
                    <a href="mailto:confusion@food.net" className="text-blue-500">nk17112001@gmail.com</a>
                </address>
            </div>
        
  
          
        </div>


      {/* map insert krna hai */}
      <div className="container mx-auto mt-10 ">
        <MapContainer center={initialPosition} zoom={13} scrollWheelZoom={false} >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <RoutingMachine from={source} to={destination} />
          <MapClickHandler handleMapClick={handleMapClick} />
          {/* <Marker position={initialPosition}>
            <Popup>
             Rajveer Colony, Gharoli Extn Kondli
            </Popup>
          </Marker> */}
        </MapContainer>
      </div>
      {/* map insert khatam ho gya  */}



      <div className='flex flex-col md:flex-row container mx-auto'>
        <div className='md:mt-[125px] rounded-xl md:mx-[100px] '>
          <img src={Contactpic2} alt="" style={{ height: "550px", width: "90%" }} />
        </div>
        <div>
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <Mail />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Contact Form
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        {...(errors.fname && { error: true, helperText: errors.fname })}
                        {...(!errors.fname && { error: null, helperText: '', color: 'success' })}
                        autoComplete="fname"
                        name="fname"
                        required
                        fullWidth
                        id="fname"
                        label="Full Name"
                        autoFocus
                        value={form.fname}
                        onChange={handleOnChange}
                        disabled={isLoading}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        {...(errors.email && { error: true, helperText: errors.email })}
                        {...(!errors.email && { error: null, helperText: '', color: 'success' })}
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleOnChange}
                        disabled={isLoading}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        {...(!errors.telephone && { error: null, helperText: '', color: 'success' })}
                        {...(errors.telephone && { error: true, helperText: errors.telephone })}
                        required
                        fullWidth
                        id="telephone"
                        label="Mobile Number"
                        name="telephone"
                        value={form.telephone}
                        onChange={handleOnChange}
                        autoComplete="telephone"
                        disabled={isLoading}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        {...(!errors.city && { error: null, helperText: '', color: 'success' })}
                        {...(errors.city && { error: true, helperText: errors.city })}
                        autoComplete="city"
                        name="city"
                        required
                        fullWidth
                        id="city"
                        label="City"
                        value={form.city}
                        onChange={handleOnChange}
                        disabled={isLoading}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        required
                        {...(!errors.message && { error: null, helperText: '', color: 'success' })}
                        {...(errors.message && { error: true, helperText: errors.message })}
                        fullWidth
                        multiline
                        rows={8}
                        name="message"
                        label="Message"
                        type="message"
                        value={form.message}
                        id="message"
                        onChange={handleOnChange}
                        autoComplete="message"
                        disabled={isLoading}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Loading...' : 'Submit'}
                  </Button>

                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </div>

      </div>
      <div>
        <Footer />
      </div>




    </>
  );
}
export default Contact;



