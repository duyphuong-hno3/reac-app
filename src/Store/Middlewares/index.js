module.exports = {
    asyncMiddleware: (store) => (next) => (action) => {
        if (typeof action === 'function') {
            action(next);
        }
    }
}