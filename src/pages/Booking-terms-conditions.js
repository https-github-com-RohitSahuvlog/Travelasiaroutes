import React, { useState, useEffect } from 'react';
import "../css/booking-term.css";
const TermsAndConditions = () => {
    const [termsData, setTermsData] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className="breadcrumb-outer text-center" style={{ backgroundImage: "url('images/booking-term.jpeg')", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
                <div className="containerbreadcrumb">
                    <div className="breadcrumb-content">
                        <h2>Booking Terms &amp; Conditions</h2>
                        <nav aria-label="breadcrumb">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item active" aria-current="page">Booking Terms &amp; Conditions</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="section-overlay"></div>
            </section>

            <section className="why-us pad_bot_0 privacy_policy">
                <div className="containerbreadcrumb">
                    <div className="why-us-about">
                        <div className="row display-flex">
                            <div className="">
                                <div className="why-about-inner">
                                    {/* Render terms and conditions data */}
                                    {termsData.map((term, index) => (
                                        <div key={index}>
                                            <h4>{term.title}</h4>
                                            <p>{term.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="why-us pad_bot_0 booking_terms">
                <div className="containerbreadcrumb">
                    <div className="why-us-about mar-bottom-60">
                        <div className="row display-flex">
                            <div className="">
                                <div className="why-about-inner">
                                    <h4>PAYMENT SCHEDULE*</h4>
                                    <ul>
                                        <li>At time of reservation: $800</li>
                                        <li>90 days prior to departure: Balance</li>
                                    </ul>
                                    <p className="text-justify">
                                        Payment schedules for certain trips vary, including but not limited to Cruises, Private Journeys, Extensions, and Special Events. These exceptions are clearly indicated in the Detailed Itineraries for each of these trips.
                                        <br /><br />
                                        Prices are listed in US dollars and all payments must be made in US dollars by credit card, check, or wire transfer.
                                    </p>

                                    <h4>PRICING</h4>
                                    <p className="text-justify">
                                        To offer the lowest possible price, all of our tours are priced according to the number of full-price participants on the trip. Midasia Travel staff like trip physicians, or guests of Midasia Routes (e.g., travel writers, photographers, leaders-in-training) are not included in the tier pricing count.
                                        Your statements will show the highest tier price (smallest group size at which we can operate) until the final payment is due. If the price decreases due to an increase in group size before the trip departs, you will receive a tier refund for the difference.<br /><br />
                                        Prices are per person based on double occupancy and do not include international airfare. A full list of what is included and not included in the base trip cost is noted in the trip Detailed Itinerary. Prices are subject to change as we are occasionally faced with exceptional cost increases or currency fluctuations that we cannot absorb. We do everything we can to keep our prices the same as published.
                                    </p>
                                    {/* </br> */}
                                    <h4>SINGLE SUPPLEMENTS</h4>
                                    <p class="text-justify">
                                        Accommodations are based on double occupancy. Participants who request single accommodations (subject to availability) must pay a single supplement fee, which is noted in the Detailed Itinerary. If you are traveling alone and wish to share accommodations, we will try to match you with a roommate of the same gender. If a roommate is not available, a ‘forced’ single supplement fee will be charged. This is a proportion of the full single supplement fee and is printed in the Detailed Itinerary for each trip.
                                    </p>

                                    {/* </br> */}
                                    <h4>CANCELLATION AND TRANSFER POLICY</h4>
                                    <p class="text-justify">
                                        If it becomes necessary for you to cancel or transfer to a different trip, the following fees will apply, calculated from the date we receive a written cancellation notice, which can be sent by email, fax, or standard mail.
                                    </p>

                                    <h4>CANCELLATION FEE SCHEDULE*</h4>
                                    <ul>
                                        <li>Up to 91 days prior to departure: No charge!</li>
                                        <li>61-90 days prior to departure: 25% of trip cost</li>
                                        <li>46-60 days prior to departure: 50% of trip cost</li>
                                        <li>45 days or less: 100% of trip cost</li>
                                    </ul>
                                    <p class="text-justify">
                                        *Cancellation and transfer schedules may differ for certain group trips, as well as Cruises, Private Journeys, Extensions, and Special Events. These exceptions are clearly indicated in the Detailed Itineraries for each of these trips.
                                        Cancellation and Transfer Fees apply to the entire Trip Cost, including the base trip cost and any additional costs, single supplement fees, internal airfare, park fees, permits, etc.

                                        Rates are based on group participation and no partial refunds will be given for unused trip arrangements for any reason whatsoever.If you are confirmed on a trip that requires a Medical Form signed by a doctor, normal cancellation penalties apply if your doctor does not sign the form.
                                    </p >

                                    <h4>CANCELLED TRIPS</h4>
                                    <p class="text-justify">
                                        Midasia Routes reserves the right to cancel any trip prior to departure for any reason whatsoever, including insufficient sign-ups or logistical problems that may impede trip operations. In such a case, a full refund of all land payments is given, which will release Midasia Routes from any further liability.
                                        {/* </br></br > */}
                                        If a trip is cancelled due to force majeure(war, labor strikes, earthquakes, flooding, etc.), Midasia Routes will refund the portion of the trip cost not already advanced to suppliers(hotels, transportation companies, etc.) and use good faith efforts to recover and refund the balance as promptly as possible.However, Midasia Routes does not guarantee recovery of any or all of the advance payments made, and our use of good faith efforts to recover these payments will not include the institution of any legal proceedings in foreign jurisdictions.Midasia Routes is not responsible for expenses incurred by trip members in preparing for a cancelled trip(e.g., non - refundable purchase of air tickets, visa fees, inoculations, equipment, etc.) or for any additional arrangements should the trip member depart prior to the scheduled group departure date.
                                    </p >

                                    {/* </br > */}
                                    <h4>TRAVEL PROTECTION PLAN</h4>
                                    <p class="text-justify">
                                        Midasia Routes recommends that you purchase travel insurance to help protect you and your travel investment against the unexpected.
                                    </p>

                                    {/* </br > */}
                                    <h4>TRIP MEMBER'S REQUIREMENTS</h4>
                                    <p>
                                        Trip members have the responsibility to select a trip appropriate for their abilities and interests. In order to assist you, we grade each trip with a Trip Level and include a detailed “What the Trip is Like” section in each trip’s Detailed Itinerary. Trip members are responsible for preparing for the trip by thoroughly reading the Detailed Itinerary and Pre-Departure booklet and understanding the physical requirements of the trip. Our Area Specialists are available to discuss the fitness level and travel conditions of the trip with you. Midasia Routes reserves the right, in its sole discretion, to prohibit a trip member from joining or continuing a trip if, in our opinion, the participant is determined to be incapable of meeting the rigors and requirements of participating in the tour activities or if the participant is deemed unfit for group travel. Under these circumstances, refunds will not be given.
                                    </p>

                                    {/* </br > */}
                                    <h4>LIMITATION OF LIABILITY</h4>
                                    <p>
                                        The payment of a deposit represents acceptance by the tour member(s) of this Release of Liability, Assumption of All Risks and Binding Arbitration Agreement.

                                        Midasia Routes, Inc., its employees, shareholders, subsidiaries, affiliates, officers, directors and successors, (collectively Midasia Routes) does not own or operate any entity that provides, or is to provide, goods or services for your trip including, for example, lodging facilities, yacht and other transportation companies, food service providers, equipment suppliers, local ground handlers, naturalist and certain guides, etc. As a result, Midasia Routes is not liable for any negligent or willful act or failure to act of any such person, or of any other third party.
                                        {/* </br></br > */}
                                        Midasia Routes is not liable for any direct, indirect, consequential, or incidental damage, injury, death, loss, accident, delay, inconvenience or irregularity of any kind that may be occasioned by reason of any act or omission beyond its control, including without limitation any willful or negligent act, failure to act, breach of contract or violation of local law or regulation of any third party such as an airline, train, hotel, bus, taxi, van, yacht or vessel, local ground handler or guide, whether or not it uses the Wilderness Travel name, financial default or insolvency of any supplier that is, to, or does supply any goods or services for this trip.
                                        {/* </br ></br > */}
                                        Midasia Routes is not responsible for any loss, injury, death or inconvenience due to delay or change in schedule, overbooking of accommodation, default of any third party, attacks by or bites from wild or domestic animals, pests or insects, epidemics or the threat thereof, sickness, the lack of appropriate medical care and / or evacuation to same, if necessary, weather, strikes, acts of God or government, lost or misplaced luggage, acts of terrorism or the threat thereof, force majeure, war, quarantine, criminal activity, or any other cause beyond its control.
                                        {/* </br ></br > */}
                                        I am voluntarily participating in this trip(or any trip to which I may subsequently transfer) with the knowledge of the numerous risks and dangers involved including but not limited to negligence on the part of Midasia Routes(for example, negligence in the conduct or arrangement of the trip in any respect from inception to completion, negligence with regard to selection of suppliers, locations and otherwise). I acknowledge that the enjoyment and excitement of adventure travel, such as this trip, is derived in part from the inherent risks incurred by travel and activity beyond the accepted safety of life at home or work and that these inherent risks contribute to such enjoyment and excitement, and are a reason for my participation.I agree to be responsible for my own welfare and accept any and all risks of delay, unanticipated events, inconvenience, illness, injury, emotional trauma or death.
                                        {/* </br ></br > */}
                                        Midasia Routes reserves the right to refuse as a trip participant, or remove, at his or her own expense and without any refund, from a trip, any person it judges to be incapable of meeting the rigors and requirements of participating in the activities, or who it determines detracts from the enjoyment of the trip by others.I agree to follow all written and verbal rules of safety or otherwise presented to me by Midasia Routes, the trip leaders, or the local ground handler.Midasia Routes reserves the right to make route, hotel, itinerary, leader changes and trip modifications as required or desirable to improve the trip quality and / or to accommodate the comfort and wellbeing of guests.
                                    </p >

                                    {/* </br > */}
                                    <h4>BINDING ARBITRATION</h4>
                                    <p>
                                        Any dispute concerning, relating, or referring to this contract, brochures, web information, or any other literature concerning my trip, or the trip itself, shall be resolved exclusively by binding arbitration in Berkeley, California, according to the then existing commercial rules of the American Arbitration Association. Such proceedings will be governed by substantive (but not procedural) California law excluding any application or consideration of the California Arbitration Act. The arbitrator and not any federal, state, or local court or agency shall have exclusive authority to resolve any dispute relating to the interpretation, applicability, enforceability, conscionability, or formation of this contract, including but not limited to any claim that all or any part of this contract is void or voidable.
                                    </p>

                                    {/* </br > */}
                                    <h4>MISCELLANEOUS MATTERS</h4>
                                    <p>
                                        Midasia Routes shall not be liable for (a) expenses such as additional hotel nights and meals not specified in the individual trip itineraries, but which may be required to get to or from a trip start or end; (b) expenses due to the delay of a trip for any reason (e.g., bad weather, trail conditions, land slides, flooding, sickness, etc.); (c) expenses incurred in recovering luggage lost by airlines, belongings left behind on a trip, or in shipping purchases or other goods home from abroad.
                                        {/* </br></br > */}
                                        Midasia Routes reserves the right to take photographic or film records of any of our trips, and may use any such records for promotional and / or commercial purposes without payment.
                                        {/* </br ></br > */}
                                        Seller of Travel Registration No.: 200769661
                                    </p >

                                </div>
                            </div >
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default TermsAndConditions;
