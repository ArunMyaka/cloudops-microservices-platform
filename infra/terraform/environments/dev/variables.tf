variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "ap-south-1"
}

variable "my_ip_cidr" {
  description = "Your public IP in CIDR format, for example 203.0.113.10/32"
  type        = string
}

variable "key_name" {
  description = "Existing AWS EC2 key pair name"
  type        = string
}

