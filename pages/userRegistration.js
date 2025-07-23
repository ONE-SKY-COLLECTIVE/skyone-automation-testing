export class UserRegistration {

  appSelectors = {
    nextBtn: '//android.widget.TextView[@text="Next"]',
    signUplink: '//android.widget.Button[@content-desc="Sign up"]',
    impactBtn:"//*[@class = 'android.widget.TextView' and (@text = 'I want to make an impact' or . = 'I want to make an impact')]"
   
  }

  async clickNextBtn() { await $(this.appSelectors.nextBtn) }
  async clicksignUpLink() { await $(this.appSelectors.signUplink)}
  async clickImpactBtn() {await $(this.appSelectors.impactBtn)}
 


}