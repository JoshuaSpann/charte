let model.patients = [
	{
		name: 'Testy Tester',
		age: 19,
		dob: '10/3',
		height: 64,
		weight: 504,
		diagnosis: 'nothing',
		status: 'full code?',
		id: 'ca99ec9',
		charts: {
			'Patient Information': `
<b>Testy Tester - MRN ca99ec9</b>
DOB: 10/03/xx &nbsp;&nbsp;&nbsp; Age: 19
Height: 64 in &nbsp;&nbsp;&nbsp; Weight: 504 lbs
Gender: Male &nbsp;&nbsp;&nbsp; Allergies: NKDA
Admitting Diagnosis: nothing
Chief Complaint: Lack of money, hunger
Code Status: Full Code

<b>History of Present Illness</b>:
Patient has expressed financial concerns and aching hunger for the past 4 weeks. They have trouble sleeping and no nice people where they live. It's not cool

<b>General Information:</b>
Marital Status: Single
Religion: Yes
Race/Ethnicity: Test
Emergency Contact: Tasty Taster (Mother) 123-456-7890

Occupation: Artist
Insurance Information: Intergalactic Cloud 9
Patient is Cardholder
`,
			'Patient History': `
<div><strong>Past Medical History:
</strong>None</div>
<div><strong>Surgical History:</strong></div>
<div>None</div>
<div><strong>Social History:</strong></div>
<div>None, unless you count the mouse that became dinner that one night...</div>
<div><strong>Home Medications:</strong></div>
<div>None</div>
<div><strong>Immunizations:</strong></div>
<div>All vaccines up to date</div>
`,
			'Provider\'s Orders': `
<strong>Emergency Department Standing Orders:</strong>

<strong>Nursing Orders:</strong>
<ol type="1">
 	<li value="1">Vital Signs</li>
 	<li>Point of care glucose test</li>
</ol>
<strong>Labs:</strong>
<ol type="1">
 	<li value="1">CBC</li>
 	<li>CMP</li>
 	<li>UA with C &amp; S (Urinalysis with culture and sensitivity)</li>
 	<li>Troponin</li>
 	<li>D-Dimer</li>
</ol>
<strong>Medications/Fluids:</strong>
<ol type="1">
 	<li value="1">IV Fluids: 1 liter 1.9% normal saline bolus</li>
</ol>
`,
			'MAR': `
<strong>Routine Medications:</strong>
<div>
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td><strong>Medication</strong></td>
<td><strong>Dosage</strong></td>
<td><strong>Route</strong></td>
<td><strong>Frequency</strong></td>
<td><strong>Provider</strong></td>
<td><strong>Time Given</strong></td>
<td><strong>Comments</strong></td>
<td><strong>RN Initials</strong></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<strong>PRN Medications:</strong>
<div>
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td><strong>Medication</strong></td>
<td><strong>Dosage</strong></td>
<td><strong>Route</strong></td>
<td><strong>Frequency</strong></td>
<td><strong>Provider</strong></td>
<td><strong>Time Given</strong></td>
<td><strong>Comments</strong></td>
<td><strong>RN Initials</strong></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>.</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<strong>Infusions:</strong>
<div>
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td><strong>Medication</strong></td>
<td><strong>Dosage</strong></td>
<td><strong>Route</strong></td>
<td><strong>Frequency</strong></td>
<td><strong>Provider</strong></td>
<td><strong>Time Started</strong></td>
<td><strong>Time Stopped</strong></td>
<td><strong>Comments</strong></td>
<td><strong>RN Initials Start</strong></td>
<td><strong>RN Initials Stop</strong></td>
</tr>
<tr>
<td>1.9% normal saline</td>
<td>1,000 mL</td>
<td>IV infusion</td>
<td>Once; bolus</td>
<td>Dr. Ishii, MD</td>
<td>0630</td>
<td></td>
<td></td>
<td>PK</td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
&nbsp;

</div>
</div>
</div>
`,
			'Progress Notes': `
<b>ED Triage Note: </b>

Patient presented to the emergency department with an empty can of tomato soup. Patient calling for room service. Patient complaining about hunger and tests.
`,
			'Assessment': `
<p style="margin: 0in; font-family: Calibri; font-size: 16.0pt;"><span style="font-weight: bold;">Lines/ Tubes/Drains:</span></p>

<ol style="margin-left: .375in; direction: ltr; margin-top: 0in; margin-bottom: 0in; font-family: Calibri; font-size: 11.0pt; font-weight: normal; font-style: normal;" type="1">
 	<li style="margin-top: 0; margin-bottom: 0; vertical-align: middle;" value="1"><span style="font-family: Calibri; font-size: 11.0pt; font-weight: normal; font-style: normal;">IV: 20G Right AC- Transparent dressing clean, dry, and intact. No redness or swelling noted. Flushes well.</span></li>
</ol>
`,
			'Labs': `
<span id="labs_display" style="font-weight: bold; font-style: italic; color: #ff0000;">**Lab results are pending</span>
<table id="labs_hidden" width="0">
<tbody>
<tr>
<td width="234"><strong>五务务</strong>

<strong>Lab Test</strong></td>
<td width="198"><strong>五务务</strong>

<strong>Normal Values</strong></td>
<td width="144"><strong>五务务</strong>

<strong>Patient Values</strong></td>
</tr>
<tr>
<td width="234"><strong>CBC</strong></td>
<td width="198"></td>
<td width="144"></td>
</tr>
<tr>
<td width="234">WBC</td>
<td width="198">8-9</td>
<td width="144">9.2</td>
</tr>
<tr>
<td width="234">RBC</td>
<td width="198">4.2-6.4</td>
<td width="144">6.3</td>
</tr>
<tr>
<td width="234">Hemoglobin</td>
<td width="198">18.9-32.4 g/dL</td>
<td width="144">25.6</td>
</tr>
<tr>
<td width="234">Hematocrit</td>
<td width="198">69-79%</td>
<td width="144">32</td>
</tr>
<tr>
<td width="234">Platelets</td>
<td width="198">123-456</td>
<td width="144">128</td>
</tr>
<tr>
<td width="234"><strong>BMP</strong></td>
<td width="198"></td>
<td width="144"></td>
</tr>
<tr>
<td width="234">Sodium</td>
<td width="198">2 mEq/L</td>
<td width="144">1</td>
</tr>
<tr>
<td width="234">Chloride</td>
<td width="198">12-13 mEq/L</td>
<td width="144">10</td>
</tr>
<tr>
<td width="234">Potassium</td>
<td width="198">3.4-5.6 mEq/L</td>
<td width="144">6.3</td>
</tr>
<tr>
<td width="234">Calcium</td>
<td width="198">8-10 mg/dL</td>
<td width="144">0.5</td>
</tr>
<tr>
<td width="234">BUN</td>
<td width="198">9-10 mg/dL</td>
<td width="144">4</td>
</tr>
<tr>
<td width="234">Creatinine</td>
<td width="198">7-14 mg/dL</td>
<td width="144">0.01</td>
</tr>
<tr>
<td width="234">Glucose</td>
<td width="198">100-420 mg/dL</td>
<td width="144">12</td>
</tr>
<tr>
<td width="234"><strong>PT</strong></td>
<td width="198">1-1.5 seconds</td>
<td width="144">108</td>
</tr>
<tr>
<td width="234"><strong>PTT</strong></td>
<td width="198">2.5-3.5 seconds</td>
<td width="144">3</td>
</tr>
<tr>
<td width="234"><strong>INR</strong>

(International normalized ratio)</td>
<td width="198"></td>
<td width="144"></td>
</tr>
<tr>
<td width="234"><strong>ALT</strong></td>
<td width="198"></td>
<td width="144"></td>
</tr>
<tr>
<td width="234"><strong>AST</strong></td>
<td width="198"></td>
<td width="144"></td>
</tr>
<tr>
<td width="234"><strong>Alkaline phosphatase</strong></td>
<td width="198"></td>
<td width="144"></td>
</tr>
<tr>
<td width="234"><strong>Troponin</strong></td>
<td width="198"></td>
<td width="144"></td>
</tr>
<tr>
<td width="234"><strong>BNP</strong></td>
<td width="198"></td>
<td width="144"></td>
</tr>
<tr>
<td width="234"><strong>Total Cholesterol</strong></td>
<td width="198"></td>
<td width="144"><span style="color: #ff0000;"><strong>248</strong></span></td>
</tr>
<tr>
<td width="234">LDL</td>
<td width="198"></td>
<td width="144"></td>
</tr>
<tr>
<td width="234">HDL</td>
<td width="198"></td>
<td width="144"></td>
</tr>
<tr>
<td width="234">Triglycerides</td>
<td width="198"></td>
<td width="144"></td>
</tr>
<tr>
<td width="234"><strong>Hemoglobin A1C</strong></td>
<td width="198"></td>
<td width="144"></td>
</tr>
</tbody>
</table>`
		}
	},
	{
		name: 'Tasty Taster',
		age: 128,
		dob: '8/16',
		height: 64,
		weight: 238,
		diagnosis: 'Clingy son',
		status: 'full code',
		id: '1121934'
	}
]

