import { IsNotEmpty, IsString } from 'class-validator';

export class CardBankRequest {
    @IsNotEmpty()
    @IsString()
    accountNumber: string;

    @IsNotEmpty()
    @IsString()
    bin: string;
}
