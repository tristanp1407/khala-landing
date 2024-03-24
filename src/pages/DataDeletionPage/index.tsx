import React from "react";

const DataDeletionInstructions: React.FC = () => {
  return (
    <div style={{ padding: 50 }}>
      <h1>Data Deletion Instructions for Khala App Users</h1>
      <p>
        At Khala App, we are committed to protecting your privacy and ensuring
        you have full control over your personal information. In compliance with
        Meta's requirements and in alignment with our dedication to user
        privacy, we have outlined a simple process for you to request the
        deletion of your data from our servers.
      </p>
      <h2>How to Request Data Deletion</h2>
      <p>
        If you wish to have your data deleted from Khala App, please follow
        these steps:
      </p>
      <ol>
        <li>
          Compose an Email: Open your email client and compose a new email.
        </li>
        <li>
          Email Address: Address the email to{" "}
          <a href="mailto:hello@khala.app">hello@khala.app</a>.
        </li>
        <li>
          Subject Line: Use the subject line "Request for Data Deletion" to help
          us quickly identify your request.
        </li>
        <li>
          Provide Details: In the body of the email, please provide us with the
          following information to help us accurately identify and delete your
          data:
          <ul>
            <li>Your full name.</li>
            <li>The email address associated with your Khala App account.</li>
            <li>
              Any additional information that you think might help us in
              processing your request more efficiently.
            </li>
          </ul>
        </li>
        <li>
          Send the Email: Once you have filled in the necessary details, send
          the email to us.
        </li>
      </ol>
      <h2>What Happens Next?</h2>
      <p>
        Acknowledgment: Upon receiving your request, we will send you an
        acknowledgment email within 48 hours, confirming that we have received
        your request for data deletion.
      </p>
      <p>
        Verification: We may contact you to verify your identity and ensure the
        security of your data. This step is crucial to prevent unauthorized
        deletions.
      </p>
      <p>
        Deletion Process: Once your request has been verified, we will proceed
        with the deletion of your data from our servers. We will remove all
        personal information that can identify you as an individual, in
        compliance with legal and regulatory requirements.
      </p>
      <p>
        Confirmation: You will receive a confirmation email from us once your
        data has been successfully deleted. This process may take up to 30 days
        from the date of your request.
      </p>
      <h2>Additional Information</h2>
      <p>
        Data Retention: Please note that in some cases, we might need to retain
        certain information for legal or regulatory purposes, even after your
        deletion request. In such cases, we will inform you about the specific
        data we need to retain and why.
      </p>
      <p>
        Questions or Concerns: If you have any questions or concerns about the
        data deletion process, privacy practices, or if you need assistance at
        any point, please do not hesitate to contact us at{" "}
        <a href="mailto:hello@khala.app">hello@khala.app</a>. We are here to
        help.
      </p>
      <p>
        Thank you for trusting Khala App with your personal information. We are
        committed to ensuring your right to privacy and to providing you with
        control over your data.
      </p>
    </div>
  );
};

export default DataDeletionInstructions;
