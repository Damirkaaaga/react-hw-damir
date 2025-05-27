type LogPayload = Record<string, unknown>;

const useLogger = (action: string, payload: LogPayload): void => {
  const logs: LogPayload[] = JSON.parse(
    localStorage.getItem("user_logs") || "[]"
  );
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
