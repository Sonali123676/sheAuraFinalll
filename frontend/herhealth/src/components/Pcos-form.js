import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
// Import the CSS file
import "./PCOSPredictionForm.css";

// ... (Rest of your imports and component code)

const PCOSPredictionForm = () => {
  const [formData, setFormData] = useState({
    // Initialize form fields with default values or leave them empty
    age: "",
    weight: "",
    height: "",
    BMI: "",
    bloodGroup: "",
    pulseRate: "",
    RR: "",
    Hb: "",
    Cycle: "",
    Cyclelength: "",
    MarraigeStatus: "",
    Pregnant: "",
    Noofaborptions: "",
    IbetaHCG: "",
    IIbetaHCG: "",
    FSH: "",
    LH: "",
    FSHLH: "",
    Hip: "",
    Waist: "",
    WaistRatio: "",
    TSH: "",
    AMH: "",
    PRL: "",
    VitD3: "",
    PRG: "",
    RBS: "",
    Weightgain: "",
    hairgrowth: "",
    skinDarkening: "",
    hairLoss: "",
    pimples: "",
    fastFood: "",
    regularExercise: "",
    bpSystolic: "",
    bpDiastolic: "",
    follicleNoL: "",
    follicleNoR: "",
    avgFSizeL: "",
    avgFSizeR: "",
    endometrium: "",
  });

  const [predictionResult, setPredictionResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict-pcos",
        formData
      );
      // Handle the prediction result
      console.log(response.data.prediction);
      if (response.data.prediction == 1) {
        setPredictionResult("Prone to PCOS ");
      } else {
        setPredictionResult("Not prone to pcos");
      }
    } catch (error) {
      console.error("Error predicting PCOS:", error);
      setPredictionResult("An error occurred while predicting PCOS.");
    }
  };

  return (
    <div className="form-body">
      <Navbar />
      <div className="heading">
        <h2 className="head">PCOS Prediction Form</h2>
      </div>

      <div className="body-3">
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            {/* Add input fields for PCOS prediction data */}
            <div className="ques">
              <label className="form-label" htmlFor="age">
                Age:
              </label>
              <input
                className="form-control"
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="weight">
                Weight (Kg):
              </label>
              <input
                className="form-control"
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                required
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="height">
                Height (Cm):
              </label>
              <input
                className="form-control"
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                required
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="BMI">
                BMI:
              </label>
              <input
                className="form-control"
                type="number"
                name="BMI"
                value={formData.BMI}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="bloodGroup">
                Blood Group:
              </label>
              <input
                className="form-control"
                type="text"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="pulseRate">
                Pulse Rate (bpm):
              </label>
              <input
                className="form-control"
                type="number"
                name="pulseRate"
                value={formData.pulseRate}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="RR">
                RR (breaths/min):
              </label>
              <input
                className="form-control"
                type="number"
                name="RR"
                value={formData.RR}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="Hb">
                Hb(g/dl):
              </label>
              <input
                className="form-control"
                type="number"
                name="Hb"
                value={formData.Hb}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="Cycle">
                Cycle(R/I):
              </label>
              <input
                className="form-control"
                type="number"
                name="Cycle"
                value={formData.Cycle}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="Cyclelength">
                Cycle length(days):
              </label>
              <input
                className="form-control"
                type="number"
                name="Cyclelength"
                value={formData.Cyclelength}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="MarraigeStatus">
                Marriage Status (Yrs):
              </label>
              <input
                className="form-control"
                type="number"
                name="MarraigeStatus"
                value={formData.MarraigeStatus}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="Pregnant">
                Pregnant(Y/N):
              </label>
              <input
                className="form-control"
                type="number"
                name="Pregnant"
                value={formData.Pregnant}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="Noofaborptions">
                No. of Abortions:
              </label>
              <input
                className="form-control"
                type="number"
                name="Noofaborptions"
                value={formData.Noofaborptions}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="IbetaHCG">
                I beta-HCG(mIU/mL):
              </label>
              <input
                className="form-control"
                type="number"
                name="IbetaHCG"
                value={formData.IbetaHCG}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="IIbetaHCG">
                II beta-HCG(mIU/mL):
              </label>
              <input
                className="form-control"
                type="number"
                name="IIbetaHCG"
                value={formData.IIbetaHCG}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="FSH">
                FSH(mIU/mL):
              </label>
              <input
                className="form-control"
                type="number"
                name="FSH"
                value={formData.FSH}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="LH">
                LH(mIU/mL):
              </label>
              <input
                className="form-control"
                type="number"
                name="LH"
                value={formData.LH}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="FSHLH">
                FSH/LH:
              </label>
              <input
                className="form-control"
                type="number"
                name="FSHLH"
                value={formData.FSHLH}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="Hip">
                Hip(inch):
              </label>
              <input
                className="form-control"
                type="number"
                name="Hip"
                value={formData.Hip}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="Waist">
                Waist(inch):
              </label>
              <input
                className="form-control"
                type="number"
                name="Waist"
                value={formData.Waist}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="WaistRatio">
                Waist Ratio:
              </label>
              <input
                className="form-control"
                type="number"
                name="WaistRatio"
                value={formData.WaistRatio}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="TSH">
                TSH (mIU/L):
              </label>
              <input
                className="form-control"
                type="number"
                name="TSH"
                value={formData.TSH}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="AMH">
                AMH (ng/mL):
              </label>
              <input
                className="form-control"
                type="number"
                name="AMH"
                value={formData.AMH}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="PRL">
                PRL (ng/mL):
              </label>
              <input
                className="form-control"
                type="number"
                name="PRL"
                value={formData.PRL}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="VitD3">
                Vit D3 (ng/mL):
              </label>
              <input
                className="form-control"
                type="number"
                name="VitD3"
                value={formData.VitD3}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="PRG">
                PRG (ng/mL):
              </label>
              <input
                className="form-control"
                type="number"
                name="PRG"
                value={formData.PRG}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="RBS">
                RBS (mg/dl):
              </label>
              <input
                className="form-control"
                type="number"
                name="RBS"
                value={formData.RBS}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="Weightgain">
                Weight gain (Y/N):
              </label>
              <input
                className="form-control"
                type="number"
                name="Weightgain"
                value={formData.Weightgain}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="hairgrowth">
                Hair growth (Y/N):
              </label>
              <input
                className="form-control"
                type="number"
                name="hairgrowth"
                value={formData.hairgrowth}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="skinDarkening">
                Skin Darkening (Y/N):
              </label>
              <input
                className="form-control"
                type="number"
                name="skinDarkening"
                value={formData.skinDarkening}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="hairLoss">
                Hair Loss (Y/N):
              </label>
              <input
                className="form-control"
                type="number"
                name="hairLoss"
                value={formData.hairLoss}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="pimples">
                Pimples (Y/N):
              </label>
              <input
                className="form-control"
                type="number"
                name="pimples"
                value={formData.pimples}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="fastFood">
                Fast Food (Y/N):
              </label>
              <input
                className="form-control"
                type="number"
                name="fastFood"
                value={formData.fastFood}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="regularExercise">
                Regular Exercise (Y/N):
              </label>
              <input
                className="form-control"
                type="number"
                name="regularExercise"
                value={formData.regularExercise}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="bpSystolic">
                BP Systolic (mmHg):
              </label>
              <input
                className="form-control"
                type="number"
                name="bpSystolic"
                value={formData.bpSystolic}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="bpDiastolic">
                BP Diastolic (mmHg):
              </label>
              <input
                className="form-control"
                type="number"
                name="bpDiastolic"
                value={formData.bpDiastolic}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="follicleNoL">
                Follicle No. (L):
              </label>
              <input
                className="form-control"
                type="number"
                name="follicleNoL"
                value={formData.follicleNoL}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="follicleNoR">
                Follicle No. (R):
              </label>
              <input
                className="form-control"
                type="number"
                name="follicleNoR"
                value={formData.follicleNoR}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="avgFSizeL">
                Avg. F size (L) (mm):
              </label>
              <input
                className="form-control"
                type="number"
                name="avgFSizeL"
                value={formData.avgFSizeL}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="avgFSizeR">
                Avg. F size (R) (mm):
              </label>
              <input
                className="form-control"
                type="number"
                name="avgFSizeR"
                value={formData.avgFSizeR}
                onChange={handleChange}
              />
            </div>
            <div className="ques">
              <label className="form-label" htmlFor="endometrium">
                Endometrium (mm):
              </label>
              <input
                className="form-control"
                type="number"
                name="endometrium"
                value={formData.endometrium}
                onChange={handleChange}
              />
            </div>

            <div>
              <button className="button" type="submit">
                Predict PCOS
              </button>
            </div>
          </form>
        </div>
        <div className="explanation-container">
          <div className="explanation">
            <h5>Understand Your Health with SheAura</h5>
            <p>
              Keep track of your health and well-being with SheAura. Start
              tracking today and take proactive steps towards monitoring and
              managing your PCOS effectively! Use the given form to input key
              information.
            </p>

            <p>
              <strong>Age:</strong> Enter your age in years. This helps in
              assessing the risk for PCOS.
            </p>
            <p>
              <strong>Weight (Kg):</strong> Input your weight in kilograms. This
              is crucial for BMI calculation.
            </p>
            <p>
              <strong>Height (Cm):</strong> Provide your height in centimeters.
              Used for BMI calculation and general health assessment.
            </p>
            <p>
              <strong>BMI:</strong> Body Mass Index, calculated based on weight
              and height. It is an indicator of body fatness.
            </p>
            <p>
              <strong>Blood Group:</strong> Specify your blood group. Certain
              blood types may have associations with health conditions.
            </p>
            <p>
              <strong>Pulse Rate (bpm):</strong> Enter your pulse rate in beats
              per minute. This is an indicator of heart health.
            </p>
            <p>
              <strong>RR (breaths/min):</strong> Input your respiratory rate in
              breaths per minute. It is an indicator of lung and cardiovascular
              health.
            </p>
            <p>
              <strong>Hb(g/dl):</strong> Hemoglobin level in grams per
              deciliter.
            </p>
            <p>
              <strong>Cycle(R/I):</strong> Menstrual cycle regularity (R) or
              irregularity (I).
            </p>
            <p>
              <strong>Cycle length(days):</strong> Length of the menstrual cycle
              in days.
            </p>
            <p>
              <strong>Marriage Status (Yrs):</strong> Enter the number of years
              you have been married.
            </p>
            <p>
              <strong>Pregnant(Y/N):</strong> Whether you are currently pregnant
              or not.
            </p>
            <p>
              <strong>No. of Abortions:</strong> Number of abortions you have
              had.
            </p>
            <p>
              <strong>I beta-HCG(mIU/mL):</strong> Blood levels of I beta-HCG
              hormone.
            </p>
            <p>
              <strong>II beta-HCG(mIU/mL):</strong> Blood levels of II beta-HCG
              hormone.
            </p>
            <p>
              <strong>FSH(mIU/mL):</strong> Blood levels of Follicle Stimulating
              Hormone.
            </p>
            <p>
              <strong>LH(mIU/mL):</strong> Blood levels of Luteinizing Hormone.
            </p>
            <p>
              <strong>FSH/LH:</strong> Ratio of FSH to LH levels.
            </p>
            <p>
              <strong>Hip(inch):</strong> Measurement of hip size in inches.
            </p>
            <p>
              <strong>Waist(inch):</strong> Measurement of waist size in inches.
            </p>
            <p>
              <strong>Waist Ratio:</strong> Ratio of waist circumference to hip
              circumference.
            </p>
            <p>
              <strong>TSH (mIU/L):</strong> Thyroid Stimulating Hormone levels
              in milli-international units per liter.
            </p>
            <p>
              <strong>AMH (ng/mL):</strong> Anti-Mullerian Hormone levels in
              nanograms per milliliter.
            </p>
            <p>
              <strong>PRL (ng/mL):</strong> Prolactin levels in nanograms per
              milliliter.
            </p>
            <p>
              <strong>Vit D3 (ng/mL):</strong> Vitamin D3 levels in nanograms
              per milliliter.
            </p>
            <p>
              <strong>PRG (ng/mL):</strong> Progesterone levels in nanograms per
              milliliter.
            </p>
            <p>
              <strong>RBS (mg/dl):</strong> Random Blood Sugar levels in
              milligrams per deciliter.
            </p>
            <p>
              <strong>Weight gain (Y/N):</strong> Whether there has been recent
              weight gain or not (Yes/No).
            </p>
            <p>
              <strong>Hair growth (Y/N):</strong> Whether there is abnormal hair
              growth or not (Yes/No).
            </p>
            <p>
              <strong>Skin Darkening (Y/N):</strong> Whether there is skin
              darkening or not (Yes/No).
            </p>
            <p>
              <strong>Hair Loss (Y/N):</strong> Whether there is hair loss or
              not (Yes/No).
            </p>
            <p>
              <strong>Pimples (Y/N):</strong> Whether there are pimples or not
              (Yes/No).
            </p>
            <p>
              <strong>Fast Food (Y/N):</strong> Whether there is a regular
              consumption of fast food or not (Yes/No).
            </p>
            <p>
              <strong>Regular Exercise (Y/N):</strong> Whether there is a
              regular exercise routine or not (Yes/No).
            </p>
            <p>
              <strong>BP Systolic (mmHg):</strong> Systolic Blood Pressure
              levels in millimeters of mercury.
            </p>
            <p>
              <strong>BP Diastolic (mmHg):</strong> Diastolic Blood Pressure
              levels in millimeters of mercury.
            </p>
            <p>
              <strong>Follicle No. (L):</strong> Number of follicles on the left
              side.
            </p>
            <p>
              <strong>Follicle No. (R):</strong> Number of follicles on the
              right side.
            </p>
            <p>
              <strong>Avg. F size (L) (mm):</strong> Average size of follicles
              on the left side in millimeters.
            </p>
            <p>
              <strong>Avg. F size (R) (mm):</strong> Average size of follicles
              on the right side in millimeters.
            </p>
            <p>
              <strong>Endometrium (mm):</strong> Thickness of the endometrial
              lining in millimeters.
            </p>
          </div>
        </div>
      </div>

      {predictionResult !== null && (
        <div className="result-container">
          <h3 className="result-heading">Prediction Result:</h3>
          <p className="result-text">{predictionResult}</p>
        </div>
      )}
      <div className="wave-container">
        <div className="wave"></div>
      </div>

      <Footer />
    </div>
  );
};

export default PCOSPredictionForm;
