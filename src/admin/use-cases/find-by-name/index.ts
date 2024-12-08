import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Admin } from "../../domain/entities/admin.entity";

@Injectable()
export class FindByNameUseCase {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {}
  
  async execute(name: string): Promise<Admin> {
    const isExistUserAdmin = await this.adminRepository.findOne({
      where: {
        name
      }
    })
    
    if(!isExistUserAdmin) {
      throw new BadRequestException('Admin does not exist')
    }
    
    return isExistUserAdmin
  }
}
