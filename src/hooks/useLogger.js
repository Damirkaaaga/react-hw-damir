const useLogger = (action, payload) => {
  const logs = JSON.parse(localStorage.getItem("user_logs")) || [];
  const newLog = {
    action,
    payload,
    time: new Date().toISOString(),
  };
  logs.push(newLog);
  localStorage.setItem("user_logs", JSON.stringify(logs));
  console.log("Action logged:", newLog);
};

export default useLogger;
