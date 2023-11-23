import Bgimage from "../assets/Aboutpage/banner-bg.svg";
import logistics1 from "../assets/Aboutpage/logistics1.jpg"
import gc_icon from "../assets/Aboutpage/gc-icon.svg"
import logistic from "../assets/Aboutpage/logistic.jpg"
import team1 from "../assets/Aboutpage/team-1.png"
import team2 from "../assets/Aboutpage/team-2.png"
import team3 from "../assets/Aboutpage/team-3.png"
import team4 from "../assets/Aboutpage/team-4.png"

import styles from "./Aboutpage.module.css"



export default function Aboutpage() {
    return (
        <div>
            <div className={styles.container}>
                <div id="page-banner">
                    <div className={styles.page_banner_area}>
                        <img
                            src={Bgimage}
                            alt="background image"
                            className={styles.banner_bg}
                        />

                        <div className={styles.banner_content}>
                            <p>About Us</p>
                            <h2>Who we are</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div id="logistics" className={styles.logistics}>
                <div className={styles.logistics_area}>

                    <div className={styles.row}>
                        <div className={styles.logistics_content}>
                            <h2 className={styles.section_title}>About Our
                                SwiftSend</h2>
                            <p className={styles.text}>Welcome to SwiftSend
                                service, your trusted partner in logistics. We are a team
                                of experienced professionals who are
                                passionate about helping businesses streamline their supply chain operations and optimize
                                their logistics processes.</p>
                            <p className={styles.text}>Our transportation
                                services include ground, air, and ocean freight, as well as
                                intermodal and expedited shipping
                                options. We leverage our carrier network and technology to provide you with the most
                                cost-effective and efficient
                                transportation solutions</p>
                            <img src={logistics1}
                                alt="logistics" className={styles.logistics_img} />

                        </div>
                    </div>
                </div>
            </div>

            <section className={styles.image_text_section}>
                <div className={styles.text_container}>
                    <h2 className={styles.section_title}>Our Goals</h2>
                    <p className={styles.text}>Our company was founded with a mission to simplify
                        the
                        logistics process for our customers, and we achieve this through
                        our commitment to delivering exceptional service and innovative
                        solutions that meet the unique needs of each client.
                        <br /><br />
                        Our team of experienced logistics professionals work closely with
                        our clients to understand their needs, develop
                        customized logistics solutions, and provide ongoing support
                        throughout the entire transportation process.
                    </p>
                    <ul className={styles.goals_collection}>
                        <li>
                            <div>
                                <img src={gc_icon} alt="gc" className={styles.gc_icon} />
                            </div>
                            <p>Transportation assistance</p>
                        </li>
                        <li>
                            <div>
                                <img src={gc_icon} alt="gc" className={styles.gc_icon} />
                            </div>
                            <p>Biggest sea cargo company</p>
                        </li>
                        <li>
                            <div>
                                <img src={gc_icon} alt="gc" className={styles.gc_icon} />
                            </div>
                            <p>Ship everywhere</p>
                        </li>
                        <li>
                            <div>
                                <img src={gc_icon} alt="gc" className={styles.gc_icon} />
                            </div>
                            <p>Unlimited packages sizes</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.help_img}>
                    <img src={logistic} alt="help" />
                </div>
            </section>

            <div id="team" className={styles.team}>
            <div className={styles.team_area}>
                
                    <div className={styles.row}>
                        <div className={styles.section_top_title}>
                            <h2 className={styles.section_title}>Our Dedicated Team</h2>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col_lg_3}>
                            <div className={styles.single_team}>
                                <a href="#" className={styles.team_img}>
                                    <img src={team1} alt="team"/>
                                </a>
                                <div className={styles.team_content}>
                                    <a href="#" className={styles.team_name}>Brooklyn Simmons</a>
                                    <p className={styles.team_text}>Web Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.col_lg_3}>
                            <div className={styles.single_team}>
                                <a href="#" className={styles.team_img}>
                                    <img src={team2} alt="team"/>
                                </a>
                                <div className={styles.team_content}>
                                    <a href="#" className={styles.team_name}>Jenny Wilson</a>
                                    <p className={styles.team_text}>Web Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.col_lg_3}>
                            <div className={styles.single_team}>
                                <a href="#" className={styles.team_img}>
                                    <img src={team3} alt="team"/>
                                </a>
                                <div className={styles.team_content}>
                                    <a href="#" className={styles.team_name}>Courtney Henry</a>
                                    <p className={styles.team_text}>Web Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.col_lg_3}>
                            <div className={styles.single_team}>
                                <a href="#" className={styles.team_img}>
                                    <img src={team4} alt="team"/>
                                </a>
                                <div className={styles.team_content}>
                                    <a href="#" className={styles.team_name}>Dianne Russell</a>
                                    <p className={styles.team_text}>Web Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>

        </div>
    )
}
