
const { Profile } = require("../model/profile");

class ProfileRepository {
    GetProfileDetail() {
        let profile = new Profile(1, "Son", "Ho Chi Minh", 23)
        return {
            error: false,
            data: {
                profile
            }
        }
    }
}


exports.ProfileRepository = new ProfileRepository;