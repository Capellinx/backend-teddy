import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateAdminDto } from "../../domain/dto/create-admin.dto";
import { Admin } from "../../domain/entities/admin.entity";
import * as bcrypt from "bcrypt"

@Injectable()
export class CreateAdminUseCase {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {}

  async execute(admin: CreateAdminDto): Promise<void> {
    if (!admin || !admin.password) {
      throw new BadRequestException('Password is required');
    }
    
    const newAdmin = new Admin({
      name: admin.name,
      password: await bcrypt.hash(admin.password, 8),
    })
    
    await this.adminRepository.save(newAdmin)
    
    return;
  }
}
