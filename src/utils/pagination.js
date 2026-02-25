export const getPagination = (page, limit) => {
    const limitVal = limit ? parseInt(limit) : 10;
    const offset = page ? (parseInt(page) - 1) * limitVal : 0;

    return { limit: limitVal, offset };
};


export const getMeta = (page, limit, total) => {
    const totalPages = Math.ceil(total / limit);
    return {
        total,
        page: parseInt(page) || 1,
        limit: parseInt(limit) || 10,
        totalPages
    }
}
