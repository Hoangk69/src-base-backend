import { userRepository } from '@repositories/user.repository';
import { Service } from 'typedi';
import axios from 'axios';
import { CardBankRequest } from '@models/user/card-bank.request';
import { ApiError } from '@models/api.error';
import { ResponseCodeEnum } from '@models/enum/response-code.enum';

@Service()
export class UserService {
    // get user order
    async getUserOrder(userLogin: string): Promise<any> {
        const result = await userRepository.getUserOrder(userLogin);
        return result;
    }

    async getAll(request: CardBankRequest): Promise<any> {
        const data = {
            accountNumber: request.accountNumber,
            bin: request.bin,
        };
          
          // URL của API bạn muốn gọi
        const apiUrl = 'https://api.vietqr.io/v2/lookup';
          
          // Header truyền đi
        const headers = {
            'Content-Type': 'application/json', // Ví dụ: Content-Type là application/json
            'X-Api-Key': 'ec11447e-a4f7-40c5-8aec-ac7719668602',
            'X-Client-Id': '06282699-c274-44ae-a2ab-0a79927178b8'
        };
          
        // Sử dụng Axios để gọi API với method POST và header
        const response = await axios.post(apiUrl, data, { headers })
        console.log(response.data);
        if(response.data.code === '00'){
            return response.data.data.accountName;
        }else{
            throw new ApiError(ResponseCodeEnum.NOT_FOUND);
        }
    }
}
