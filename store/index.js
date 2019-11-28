export const state = () => ({
	loggedInUser: undefined,
	device: undefined,
	cookies: undefined
});

export const mutations = {
	setState(state, data) {
		state.loggedInUser = data.loggedInUser;
		state.cookies = data.cookies;
		state.device = data.device;
	},
	clearState(state) {
		state.loggedInUser = undefined;
		state.cookies = undefined;
		state.device = undefined;
	}
};

export const actions = {};
