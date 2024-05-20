import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
    @PrimaryColumn()
    user_id: string;

    @Column()
    user_name: string;

    @Column()
    password: string;

    @Column({ type: 'timestamp' })
    mod_password_at: Date;

    @Column()
    user_type: string;

    @Column()
    belong_group_id: string;

    @Column()
    pc_mail_address: string;

    @Column()
    mobile_mail_address: string;

    @Column()
    created_by: string;

    @Column()
    updated_by: string;

    @Column()
    created_at: string;

    @Column()
    updated_at: string;

    @Column()
    user_type_fix_flg: string;

    @Column()
    user_kbn: string;
}
