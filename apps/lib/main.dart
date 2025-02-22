import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'FreelanceSafe',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: const MyHomePage(title: 'FreelanceSafe Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  Future<void> _createEscrow() async {
    final response = await http.post(
      Uri.parse('http://localhost:3000/api/proxy/escrow/create'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, dynamic>{
        'freelancer_id': 'freelancer123',
        'client_id': 'client123',
        'description': 'Project payment',
        'amount': 1000,
        'currency': 'USD',
      }),
    );

    if (response.statusCode == 200) {
      final responseJson = jsonDecode(response.body);
      print('Escrow created: $responseJson');
    } else {
      throw Exception('Failed to create escrow');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(widget.title)),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text('You have pushed the button this many times:'),
            Text('$_counter', style: Theme.of(context).textTheme.headline4),
            ElevatedButton(
              onPressed: _createEscrow,
              child: const Text('Create Escrow'),
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ),
    );
  }
}
