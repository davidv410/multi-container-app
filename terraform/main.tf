terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}

provider "digitalocean" {
  token = var.do_token
}

variable "do_token" {}

resource "digitalocean_droplet" "app" {
  name   = "todos-app"
  region = "fra1"     # Frankfurt, closest to Bosnia
  size   = "s-1vcpu-1gb"  # cheapest, $6/month
  image  = "ubuntu-22-04-x64"
}

output "server_ip" {
  value = digitalocean_droplet.app.ipv4_address
}