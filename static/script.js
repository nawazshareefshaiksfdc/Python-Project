function dataSend() {
    const input = document.querySelector('.app_data-input').value;

    // Simulated API response
    const simulatedResponse = {
        concepts: "Concepts related to the question: Basics of Python functions, Function syntax, Variable scopes.",
        codeExample: "def example_function():\n    return 'Hello, World!'\n\n# Call the function\nprint(example_function())",
        comments: "This function demonstrates a basic Python function. It returns a string 'Hello, World!' which is then printed."
    };

    // Populate the output containers
    document.querySelector('.app_concept-container').value = simulatedResponse.concepts;
    document.querySelector('.app_code-container').value = simulatedResponse.codeExample;
    document.querySelector('.app_comment-container').value = simulatedResponse.comments;

    // Concatenate all information for combined output
    const combinedOutput = 
        `Concepts:\n${simulatedResponse.concepts}\n\n` +
        `Code Example:\n${simulatedResponse.codeExample}\n\n` +
        `Comments:\n${simulatedResponse.comments}`;

    document.querySelector('.app_output-container').value = combinedOutput;

    // Clear the input after submission
    document.querySelector('.app_data-input').value = '';
}