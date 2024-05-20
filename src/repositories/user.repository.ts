import { AppDataSource } from '@config/app-datasource';
import { UserEntity } from '@entities/user.entity';

export const userRepository = AppDataSource.getRepository(UserEntity).extend({
    // get infor user order
    async getUserOrder(userLogin: string): Promise<any> {
        const qb = this.createQueryBuilder('u')
            .select([
                'u.user_id AS "userId"',
                'p.password AS "password"',
                'u.user_type AS "userType"',
            ])
            .where('u.user_id = :userId', {
                userId: userLogin,
            });

        const result = await qb.getRawOne();

        return result;
    },
});
