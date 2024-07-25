import { TestBed } from '@angular/core/testing';
import { StringCalculatorService } from './string-calculator.service';

describe('StringCalculatorService', () => {
  let service: StringCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringCalculatorService);
  });

  it('should return 0 for an empty string', () => {
    expect(service.add('')).toBe(0);
  });

  it('should return 1 for the input "1"', () => {
    expect(service.add('1')).toBe(1);
  });

  it('should return 6 for the input "1,5"', () => {
    expect(service.add('1,5')).toBe(6);
  });

  it('should return 6 for the input "1\n2,3"', () => {
    expect(service.add('1\n2,3')).toBe(6);
  });

  it('should return 3 for the input "//;\n1;2"', () => {
    expect(service.add('//;\n1;2')).toBe(3);
  });

  it('should throw an error for negative numbers', () => {
    expect(() => service.add('1,-2')).toThrow(new Error('Negative numbers not allowed: -2'));
  });
  
  it('should throw an error for multiple negative numbers', () => {
    expect(() => service.add('1,-2,-3')).toThrow(new Error('Negative numbers not allowed: -2, -3'));
  });
  
});
