import React from 'react'
import logo from '../logo.png'
import building from '../building.jpg'

const AboutUs = () => {
  return (
    <div className='container' style={{marginTop:20,marginBottom:20, height:'200vh'}}>
        <div className='card'>
            <div className='row'>
                <div className='col-md-4' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <img className='img-fluid rounded-start' src={logo} style={{width:200,height:200}} />
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h4 className='card-title'>Founding of RGUKT</h4>
                        <p className='card-text'>
                            <li>The idea to create RGUKT germinated in April 2007, at a meeting between Prof. D.Raj Reddy and Prof. K.C. Reddy who then took idea to the then Chief Minister of Andhra Pradesh, Dr. Y.S.Rajashekar Reddy. Dr. YSR by then was not happy with the opportunities available to the rural youth and wanted to start a University modeled on IIIT to exclusively concentrate on rural youth in imparting technology oriented higher education for bettering their employment potential</li>
                            <li>A Task Force was created under the Chairmanship of Prof. K.C. Reddy, the then chairman APSCHE which recommended for establishing a technological University to benefit rural youth.</li>
                            <li>In March of 2008, the AP Government created RGUKT with three campuses through an Act of the Legislature as a full-fledged university which would initially admit approximately the top 1% of the rural students into the three residential campuses located at RK Valley, Basara and Nuzvid.</li>
                            <li>The first batch of about 6,500 tenth class graduates was admitted into the six year integrated B.Tech program in August of 2008. The initial selection was based on the 'Mandal Best' model wherein students securing the top marks in SSC examination in every mandal were selected.</li>
                            <li>Prof. Raj Reddy as the founding Chancellor of the University for a decade guided the educational philosophy of the University and also moulded the academic journey to maintain not only its uniqueness but create significant impact on the quality of outcome and the student employment profile that later transformed their lives.</li>
                        
                        </p>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h4 className='card-title'>RGUKT Educational Objectives</h4>
                        <p className='card-text'>
                        The primary objective of establishing RGUKT was to provide high quality educational opportunities for the aimed rural youth of Andhra Pradesh. The initial goal was that at least the top 1 % of the rural graduates would be given the opportunity to study at RGUKT.
                        The top 1% of rural graduates is around 6,000 to 7,000 per year. Thus, the three campuses would need residential accommodation for about 36,000 students for the six year integrated program. 
                        <br />
                        <br />

                        At present, most universities in India and in Andhra Pradesh follow the affiliated college structure model where the main role of the university is to set the curriculum and conduct examinations to ensure that the students have indeed learned the material prescribed in the curriculum. Most colleges have an entering class of 100-300. Having an entry class of 6,000 students leads to issues of scale. This is unique to RGUKT and is being attempted for the first time in India. In the US, several of the larger universities do have enrolments of 20,000 to 30,000. However not all of them tend to be residential universities. Thus RGUKT, as a green field university, represents a unique experiment in the educational arena.

                        <br />
                        <br />

                        The assumption is that ICT (Information and Communication Technologies), will permit the scaling of the learning environments by one to two orders of magnitude is currently possible.

                        <br />
                        <br />

                        Another key educational objective of RGUKT is to use advances in learning sciences and explore the use of modern cognitive science tools in education and learning.

                        <br />
                        <br />

                        Phrases such as "Learning by Example", "Learning by Doing", "Problem-Based Learning", "Self-Paced Learning", etc become facilitated when every student can be assured to have a personal computer that does not have to be shared with anyone else.


                        </p>
                    </div>
                </div>
                <div className='col-md-4' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <img className='img-fluid rounded-start' src={building} style={{width:300,height:300}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs