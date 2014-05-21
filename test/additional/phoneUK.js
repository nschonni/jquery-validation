module("phoneUK");

test("phoneUK", function() {
	var method = methodTest("phoneUK");
	ok( method( "0117 333 5555" ), "Valid UK Phone Number" );
	ok( method( "0121 555 5555" ), "Valid UK Phone Number" );
	ok( method( "01633 555555" ), "Valid UK Phone Number" );
	ok( method( "01298 28555" ), "Valid UK Phone Number" );
	ok( method( "015395 55555" ), "Valid UK Phone Number" );
	ok( method( "016977 3999" ), "Valid UK Phone Number" );
	ok( method( "020 3000 5555" ), "Valid UK Phone Number" );
	ok( method( "024 7500 5555" ), "Valid UK Phone Number" );
	ok( method( "0333 555 5555" ), "Valid UK Phone Number" );
	ok( method( "0500 555555" ), "Valid UK Phone Number" );
	ok( method( "055 3555 5555" ), "Valid UK Phone Number" );
	ok( method( "07122 555555" ), "Valid UK Phone Number" );
	ok( method( "07222 555555" ), "Valid UK Phone Number" );
	ok( method( "07322 555555" ), "Valid UK Phone Number" );
	ok( method( "0800 555 5555" ), "Valid UK Phone Number" );
	ok( method( "0800 355555" ), "Valid UK Phone Number" );
	ok( method( "0843 555 5555" ), "Valid UK Phone Number" );
	ok( method( "0872 555 5555" ), "Valid UK Phone Number" );
	ok( method( "0903 555 5555" ), "Valid UK Phone Number" );
	ok( method( "0983 555 5555" ), "Valid UK Phone Number" );
	ok( method( "(07122) 555555" ), "Valid UK Phone Number" );
	ok( method( "(07222) 555555" ), "Valid UK Phone Number" );
	ok( method( "(07322) 555555" ), "Valid UK Phone Number" );
	ok( method( "+44 7122 555 555" ), "Valid UK Phone Number" );
	ok( method( "+44 7222 555 555" ), "Valid UK Phone Number" );
	ok( method( "+44 7322 555 555" ), "Valid UK Phone Number" );
	ok(!method( "7222 555555" ), "Invalid UK Phone Number" );
	ok(!method( "+44 07222 555555" ), "Invalid UK Phone Number" );
});