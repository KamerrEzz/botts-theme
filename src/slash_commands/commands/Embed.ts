const Start_Lesson_Command = {
  name: "start_lesson",
  description: "Starts a lesson",
  options: [
    {
      type: 3,
      name: "time",
      description: "How long is the lesson?",
      default: false,
      required: true,
    },
  ],
};

export default Start_Lesson_Command;
