import Statue from "../../assets/images/statue.jpg";
import { motion } from "framer-motion";
const Aboutsou = () => {
    return (

        <div className="container-fluid mt-5">
            <div className="row">
                <motion.div
                initial={{x:-100 , opacity:0}}
                animate={{x:0 , opacity:1}}
                transition={{duration:1}}
                 className="col-md-6 text-muted ">
                    <h4 className="text-center">About Statue Of Unity</h4>
                    <p className="">
                        The statue has been built as a verse to Sardar Vallabhbhai Patel, the Iron Man of India and the first home minister of independent India. He was responsible for uniting all 562 princely states of the country to build the Republic of India. <strong>
                            <mark>
                                The Statue has the expression, posture and pose justify the dignity, confidence, iron-will as well as kindness that Sardar Patel’s personality radiates.
                            </mark>
                        </strong>
                    </p>
                    <p>
                        October 31st, 2018, marked the inauguration of the world’s tallest statue – the Statue of Unity, against the backdrop of the dramatic Satpura and Vindhyachal hills in Kevadia, Gujarat. The 182-meters (600 feet approx.) statue is dedicated to Sardar Vallabhbhai Patel, the architect of independent India. The colossal monument towers over River Narmada, a tribute to India ‘from the people of Gujarat’ to the leader who placed people’s welfare first.
                    </p>
                    <p>The Statue of Unity overlooks the vast surrounds and the river basin of the Narmada River and the sprawling Sardar Sarovar dam. It stands on the Sadhu Bet hillock, connected by a 300-meters bridge, which offers access from the mainland to the statue.</p>
                    <p>As a part of an outreach programme for the project, the state government had asked Indian farmers to donate their used farming equipment to collect iron needed for the statue of Sardar Patel. Eventually, about 5000 tons of iron is believed to be collected. Details of the construction and history of the leader can be seen in an in-house museum, inside the statue.</p>
                    <p>Altogether, the statue is divided into five zones. Up to its shin is the first zone, comprising three levels, including an exhibit floor, mezzanine and roof. It will contain a Memorial Garden and a large museum.</p>
                    <p>Zone 2 extends up to the statue’s thighs at 149 meters, while Zone 3 goes up to the viewing gallery at 153 meters.</p>
                    <p>Zone 4 and Zone 5 would be out of reach of visitors, with Zone 4 comprising the maintenance area and Zone 5 the head and shoulders.</p>
                </motion.div>
                <motion.div
                 initial={{x:100 , opacity:0}}
                 animate={{x:0 , opacity:1}}
                 transition={{duration:1}}
                className="col-md-6 how-img d-flex align-items-center justify-content-center">
                    <img src={Statue} className="img-fluid" alt="staue image" />
                </motion.div>
            </div>
        </div>
    )
}

export default Aboutsou;
