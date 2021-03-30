import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Post from 'src/entities/post.entity';
import User from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { AddPostDto } from './dto/addPost.dto';

@Injectable()
export class PostService {

  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) { }

  async addPost (addPostDto: AddPostDto, user: User) {
    const createPost = this.postRepository.create(addPostDto);

    createPost.user = user; 
  }

}
