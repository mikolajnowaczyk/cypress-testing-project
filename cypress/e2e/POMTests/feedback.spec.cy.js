import Feedback from "../page-objects/pages/FeedbackPage"

describe("Feedback test using fixtures", () => {
    before(function () {
        Feedback.load();
    })

    it("should submit feedback form", () => {
        Feedback.submitFeedback();
    })
})