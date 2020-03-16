package com.clinics.doctors.ui.controller;

import com.clinics.common.DTO.request.outer.doctor.AddEditAppointmentDTO;
import com.clinics.common.DTO.response.outer.AppointmentResponseDTO;
import com.clinics.doctors.ui.service.AppointmentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@Controller
@RequestMapping(value = "/doctors/{doctorUUID}/calendars/{calendarUUID}/appointments")
public class DoctorAppointmentController {

	final private AppointmentService appointmentService;

	public DoctorAppointmentController(
			AppointmentService appointmentService) {
		this.appointmentService = appointmentService;
	}

	@GetMapping
	public ResponseEntity<List<AppointmentResponseDTO>> getCalendarAppointments(
			@PathVariable UUID doctorUUID,
			@PathVariable UUID calendarUUID){
		return ResponseEntity.ok().body(appointmentService.getAllAppointments(doctorUUID, calendarUUID));
	}

	@GetMapping(value = "/{appointmentUUID}")
	public ResponseEntity<AppointmentResponseDTO> getCalendarAppointment(
			@PathVariable UUID doctorUUID,
			@PathVariable UUID calendarUUID,
			@PathVariable UUID appointmentUUID){
		return ResponseEntity.ok().body(appointmentService.getAllAppointment(doctorUUID, calendarUUID, appointmentUUID));
	}

	@PostMapping
	public ResponseEntity<AppointmentResponseDTO> add(
			@Valid @RequestBody AddEditAppointmentDTO addEditAppointmentDTO,
			@PathVariable UUID doctorUUID,
			@PathVariable UUID calendarUUID){
		return ResponseEntity.status(HttpStatus.CREATED).body(appointmentService.save(doctorUUID, calendarUUID, addEditAppointmentDTO));
	}

	@PostMapping(value = "/multiple")
	public ResponseEntity<List<AppointmentResponseDTO>> addList(
			@Valid @RequestBody List<AddEditAppointmentDTO> addEditAppointmentDTO,
			@PathVariable UUID doctorUUID,
			@PathVariable UUID calendarUUID){
		return ResponseEntity.status(HttpStatus.CREATED).body(appointmentService.save(doctorUUID, calendarUUID, addEditAppointmentDTO));
	}

}