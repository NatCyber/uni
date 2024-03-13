﻿namespace EGST.Application.Dto.Auth
{
    public class UserRegistrationRequest
    {
        public string FullName { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string Password { get; set; } = string.Empty;

        public string? Role { get; set; } = null;
    }
}
