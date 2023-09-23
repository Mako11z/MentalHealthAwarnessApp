import React from "react";
import Resources from "./Resources";

const ResLayout = () => {
    return (
        <div className="Resource">
            <table>
                <thead>
                     <tr>
                         <th></th>
                         <th>Anxiety</th>
                         <th>OCD</th>
                         <th>Depression</th>
                         <th>ADHD</th>
                         <th>PTSD</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
  <td className="time"></td>
    <a href="https://www.anxietycanada.com/articles/coping-with-back-to-school-anxiety/">
      <Resources resource = 'School' />
    </a>
  
  <td>
    <a href = "http://www.ocfoundation.org/">
      <Resources resource = "OCDF" />
    </a>
  </td>
  <td>
    <a href="https://www.healthline.com/health/mental-health/online-help-for-depression#betterhelp">
      <Resources resource = 'BetterHelp' />
    </a>
  </td>
  <td>
    <a href = 'http://www.chadd.org/'>
      <Resources resource = 'CHADD' />
    </a>
  </td>
  <td>
    <a href="http://www.ptsd.va.gov/">
      <Resources resource = 'PTSD Help' />
    </a>
  </td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td className="time"></td>
  <td>
  <a href = 'https://www.helpguide.org/articles/anxiety/social-anxiety-disorder.htm'>
      <Resources resource = 'Social' />
    </a>
  </td>
  <td>
    <a href = 'https://beyondocd.org/'>
      <Resources resource = "OCDA" />
    </a>
  </td>
  <td>
    <a href = "https://www.healthline.com/health/mental-health/online-help-for-depression#talkspace">
      <Resources resource = 'TalkSpace' />
    </a>
  </td>
  <td>
    <a href="https://add.org/">
      <Resources resource = 'ADDA' />
    </a>
  </td>
  <td>
    <a href = "https://www.everydayhealth.com/ptsd/guide/">
      <Resources resource = 'Everyday Help' />
    </a>
  </td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td className="time"></td>
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
        </div>
    )
}
export default ResLayout;