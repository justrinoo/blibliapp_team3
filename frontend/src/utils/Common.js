export const getUser = () => {
	const useStr = sessionStorage.getItem("user");
	if (useStr) return JSON.parse(useStr);
	else return null;
};

//  mengembalikan token dari sessionstorage
export const getToken = () => {
	return sessionStorage.getItem("token") || null;
};

export const removeUserSession = () => {
	sessionStorage.removeItem("token");
	sessionStorage.removeItem("user");
};

export const setUserSession = (token, user) => {
	sessionStorage.setItem("token", token);
	sessionStorage.setItem("user", JSON.stringify(user));
	console.log(token);
};
