const prisma = require('../config/prisma');

const authorizeRoles = (allowedRoles) => {
    return async (req, res, next) => {
        try {
            const userId = req.user?.id;

            if (!userId) {
                return res.status(401).json({ error: 'Unauthorized: missing user' });
            }

            const user = await prisma.user.findUnique({
                where: { id: userId },
                include: { role: true },
            });

            if (!user || !allowedRoles.includes(user.roleId)) {
                return res.status(403).json({ error: 'Forbidden: insufficient privileges' });
            }

            next();
        } catch (err) {
            res.status(500).json({ error: 'Internal server error in role check' });
        }
    };
};

module.exports = authorizeRoles;