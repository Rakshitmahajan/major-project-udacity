const { expect } = require('chai');
const loginSignUp = require('../config/loginSignUpFunction');

describe('Login function testing', () => {
    it('Log\'s in user', async () => {
        const req = {
            body: {
                email: 'rakshit@gmail.com',
                password: 'pass',
            },
        };

        const result = await loginSignUp.loginStudent(req);
        expect(result).to.deep.equal({
            err: {
                message: null
            },
            data: {
                firstname: '',
                lastName: '',
                email: '',
                phoneNumber: '',
            }
        });
    });

    it('No email or password entered', async () => {
        const req = {
            body: {
                email: '',
                password: '',
            },
        };

        const result = await loginSignUp.loginStudent(req);
        expect(result).to.deep.equal({
            err: {
                message: 'fields required'
            },
            data: null
        });
    });

    it('Handles Unregistered User', async () => {
        const req = {
            body: {
                email: 'bgdjnsb@gmail.com',
                password: 'hhjbjh',
            },
        };

        const result = await loginSignUp.loginStudent(req);
        expect(result).to.deep.equal({
            err: {
                message: 'user not found'
            },
            data: null
        });
    });

    it('Handles Wrong password', async () => {
        const req = {
            body: {
                email: 'rakshit@gmail.com',
                password: 'hjhk',
            },
        };
        const result = await loginSignUp.loginStudent(req);
        expect(result).to.deep.equal({
            err: {
                message: 'password not correct',
            },
            data: null
        });
    });
});

describe('SignUp Functon Testing', () => {
    it('SignUp\'s user', async () => {
        const req = {

            body: {
                firstName: 'jhakjab',
                lastName: 'jkabkja',
                email: 'mjbkj@gmail.com',
                phoneNumber: '8992996732',
                password: 'passs',
                password2: 'passs',
            },
        };
        const result = await loginSignUp.signupStudent(req);
        expect(result).to.deep.equal({
            err: null,
            data: {
                firstName,
                lastName,
                email,
                phoneNumber,
            },
        });
    });

    it('If fields are missing', async () => {
        const req = {
            body: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                password: '',
                password2: '',
            },
        };
        const result = await loginSignUp.signupStudent(req);
        expect(result).to.deep.equal({
            err: {
                message: 'field required'
            },
            data: null,
        });
    });

    it('If email is already registered', async () => {
        const req = {
            body: {
                firstName: 'jhakjab',
                lastName: 'jkabkja',
                email: 'mjbkj@gmail.com',
                phoneNumber: '8992996732',
                password: 'passs',
                password2: 'passs',
            },
        };

        const result = await loginSignUp.signupStudent(req);
        expect(result).to.deep.equal({
            err: {
                message: 'user already exist',
            },
            data: null,
        });
    });

    it('Password match fails', async () => {
        const req = {
            body: {
                firstName: 'jhakjab',
                lastName: 'jkabkja',
                email: 'mjbj@gmail.com',
                phoneNumber: '8992996732',
                password: 'passs',
                password2: 'pas',
            },
        };

        const result = await loginSignUp.signupStudent(req);
        expect(result).to.deep.equal({
            err: {
                message: 'password do not match',
            },
            data: null,
        });
    });

    it('Password is not of minimum length 5', async () => {
        const req = {
            body: {
                firstName: 'jhakjab',
                lastName: 'jkabkja',
                email: 'mjbj@gmail.com',
                phoneNumber: '8992996732',
                password: 'pas',
                password2: 'pas',
            },
        };

        const result = await loginSignUp.signupStudent(req);
        expect(result).to.deep.equal({
            err: {
                message:'password must be of minimum length 5',
            },
            data: null,
        });

    });

    it('Mobile number is not correct format', async () => {
        const req = {
            body: {
                firstName: 'jhakjab',
                lastName: 'jkabkja',
                email: 'mjbj@gmail.com',
                phoneNumber: '89926732',
                password: 'pas',
                password2: 'pas',
            },
        };

        const result = await loginSignUp.signupStudent(req);
        expect(result).to.deep.equal({
            err: {
                message: 'phone number not valid',
            },
            data: null,
        });

    });

    it('If email is not valid', async () => {
        const req = {
            body: {
                firstName: 'jhakjab',
                lastName: 'jkabkja',
                email: 'console.log()',
                phoneNumber: '89926732',
                password: 'pas',
                password2: 'pas',
            },
        };

        const result = await loginSignUp.signupStudent(req);
        expect(result).to.deep.equal({
            err: {
                message: 'enter valid email',
            },
            data: null,
        });
    });

});