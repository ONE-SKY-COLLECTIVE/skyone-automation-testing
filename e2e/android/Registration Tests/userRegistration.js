
import { UserRegistration } from "./../../../pages/userRegistration";

describe("User Registration", () => {
  const registrationPage = new UserRegistration();

  it("should complete user registration", async () => {
    await driver.activateApp("com.onesky.oneskyapp");
    await $(registrationPage.appSelectors.nextBtn).click();
    await $(registrationPage.appSelectors.nextBtn).click();
    await $(registrationPage.appSelectors.impactBtn).click()
    await driver.pause(10000)
  });
});
