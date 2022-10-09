
const profileRepository = require("../repository/profile").ProfileRepository
const logger = require("../../../config/logger")

class ProfileUsecase {
    GetProfileInfo({}) {
        return new Promise(resolve => {
            let profile = profileRepository.GetProfileDetail()
            if (profile.error) {
                logger.error("Get Profile Detail error")
                return resolve({ error: true, message: "ERROR" });
            }

            return resolve(profile);
		})
    }
}

exports.ProfileUsecase = new ProfileUsecase;