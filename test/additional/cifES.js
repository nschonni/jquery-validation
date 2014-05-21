module("cifES");

test("cifES", function() {
	var method = methodTest("cifES");
	ok( method( "A79082244" ), "CIF valid" );
	ok( method( "A60917978" ), "CIF valid" );
	ok( method( "A39000013" ), "CIF valid" );
	ok( method( "B43522192" ), "CIF valid" );
	ok( method( "B38624334" ), "CIF valid" );
	ok( method( "G72102064" ), "CIF valid" );
	ok( method( "F41190612" ), "CIF valid" );
	ok( method( "J85081081" ), "CIF valid" );
	ok( method( "S98038813" ), "CIF valid" );
	ok( method( "G32937757" ), "CIF valid" );
	ok( method( "B46125746" ), "CIF valid" );
	ok( method( "C27827559" ), "CIF valid" );
	ok( method( "E48911572" ), "CIF valid" );
	ok( method( "s98038813" ), "CIF valid: lower case" );
	ok(!method( "K48911572" ), "CIF invalid: starts with K" );
	ok(!method( "L48911572" ), "CIF invalid: starts with L" );
	ok(!method( "M48911572" ), "CIF invalid: starts with M" );
	ok(!method( "X48911572" ), "CIF invalid: starts with X" );
	ok(!method( "Y48911572" ), "CIF invalid: starts with Y" );
	ok(!method( "Z48911572" ), "CIF invalid: starts with Z" );
	ok(!method( "M15661515" ), "CIF invalid" );
	ok(!method( "Z98038813" ), "CIF invalid: wrong letter" );
	ok(!method( "B 43522192" ), "CIF invalid: white spaces" );
	ok(!method( "43522192" ), "CIF invalid: missing letter" );
	ok(!method( "BB43522192" ), "CIF invalid: two letters" );
	ok(!method( "B53522192" ), "CIF invalid: wrong number" );
	ok(!method( "B433522192" ), "CIF invalid: > 8 digits" );
	ok(!method( "B3522192" ), "CIF invalid: < 8 digits" );
	ok(!method( "B-43522192" ), "CIF invalid: dash" );
	ok(!method( "Basdasdas" ), "CIF invalid: all letters" );
	ok(!method( "B43.522.192" ), "CIF invalid: dots" );
	ok(!method( "B-43.522.192" ), "CIF invalid: dots and dash" );
});