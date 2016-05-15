#pragma strict

public var movementSpeed = 10.0;
private var limitLongitude = 180;
private var limitLatitude = 90;
var longitude = 130;
var elevation = 100;
var latitude = 0;
var plane: GameObject;
//private var coroutine;

function Start () {
    //var inicialPosition = readPositions();
    //this.transform.position = inicialPosition;
}

function Update () {
    var moonPosition = readPositions();
    this.transform.position = moonPosition;
    //this.transform.Translate(movementSpeed , 0, 0);
}



function readPositions () {
    wait();
    
    var geographicalCoordinates = readGeographicalCoordinates();
    var rendererMap = plane.GetComponent.<Renderer>();
    var sizeEarth = rendererMap.bounds.size;
    var scaleX = (sizeEarth.x / 2.0) / limitLongitude;
    var scaleZ = (sizeEarth.z / 2.0) / limitLatitude;
    var positionX = scaleX * geographicalCoordinates.x;
    var positionZ = scaleZ * geographicalCoordinates.z;
    var positionY = geographicalCoordinates.y;
    Debug.Log("Objecto" + sizeEarth.ToString());
    return Vector3(positionX, positionY, positionZ);
}

function readGeographicalCoordinates() {
    
    var coordinateLatitude = 47.15;
    var coordinateLongitude = -110.43;
    var rise = 100; 
    return Vector3(coordinateLongitude, rise, coordinateLatitude);
}
function wait() {
    while(true){
        yield WaitForSeconds(3.0f);
    }
}
